## Dev

- [Dev](#dev)
- [Clone](#clone)
- [Install](#install)
- [Structure](#structure)
- [Run](#run)
- [Setup](#setup)

## Clone

```sh
$ git clone https://github.com/NguyenPhuocMinh/pm-tool-api.git
```

## Install

```sh
$ npm install
```

## Structure

```
.
├── Dockerfile
├── README.md
├── configs.js
├── deploy.sh
├── docker-compose.yml
├── helm-charts
│   ├── cert-manager
│   ├── ingress
│   └── pm-tool-api
├── package.json
├── server.js
├── src
│   ├── routers
│   └── services
├── tests
└── webpack.config.js
```

## Run

- **Start local**
```
$ npm start
```

- **Uni Test**
```
$ npm run unit:test
```

- **Check Linter**
```
$ npm run lint:check
```
## Setup

- **Build and push docker image to DockerHub:**

  - Run docker manual:

    - docker build -t <username>/pm-tool-api:<version> .
    - docker run -d -p 8080:8080 pm-tool-api
    - docker login
    - docker push <username>/pm-tool-api:<version>

  - https://circleci.com/developer/orbs/orb/circleci/docker
  - https://circleci.com/developer/orbs/orb/circleci/docker#commands-check

- **Setup Nginx**:

  - Install nginx ubuntu:
    - sudo apt update
    - sudo apt install nginx
  - Verify nginx status:
    - systemctl status nginx
  - Config nginx:
    - cd /etc/nginx
    - sudo touch configuration.conf
    - sudo nano configuration.conf
    ````js
    server {
      server_name <SERVER_IP>;
        location / {
        proxy_pass http://127.0.0.1:8080;
      }
    }
         ```
    ````
  - Verify nginx config:
    - sudo nginx -t
  - Restart nginx service:
    - sudo service nginx restart
  - Go to <SERVER_IP>

- **Setup CircleCI**:

  - Setup context pm-tool-api-context
    - APP_DOCKER_USERNAME
    - APP_DOCKER_PASSWORD
  - Setup env:
    - APP_DEPLOYED_USER
    - APP_HOST_NAME
  - Setup ssh key:
    - cat pm-tool.pem
    - copy and paste to SSH key circle
  - Setup script deploy
    - chmod -R 777 .
    - ./deploy.sh

- **Setup chart**:
  - alias k="kubectl"
  - Helm create pm-tool-api ./deploy => create chart
  - Helm template ./pm-tool-api => check template chart
  - Expose port k8s:
    - kubectl port-forward <pod-name> <locahost-port>:<pod-port>
  - Check chart
    - helm lint <path>
  - Install ingress-nginx:
    - helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    - helm install ingress-nginx ingress-nginx/ingress-nginx
  - Install cert manager:
    - helm repo add jetstack https://charts.jetstack.io
    - helm install cert-manager --namespace cert-manager --create-namespace jetstack/cert-manager --version v1.5.3 --set installCRDs=true
    - kubectl get pods -n cert-manager
  - Create issuer:
    - kubectl apply -f issuer.yml
    - kubectl get issuer
  - Create new ingress
    - kubectl apply -f new-ingress.yml
  - Push helm to ECR
    - helm push helm-test-chart-0.1.0.tgz oci://aws_account_id.dkr.ecr.region.amazonaws.com/
