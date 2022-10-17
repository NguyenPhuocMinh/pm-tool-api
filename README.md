# Project management tool api

## Setup

- **Build and push docker image to DockerHub:**
  - Run docker manual:
    - docker build -t pm-tool .
    - docker run -d -p 8080:8080 pm-tool

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
  - Create issuer:
    - kubectl apply -f issuer.yml
    - kubectl get clusterissuer
  - Create new ingress
    - kubectl apply -f new-ingress.yml
    - kubectl get challenges