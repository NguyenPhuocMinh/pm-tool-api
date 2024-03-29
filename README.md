## Dev

- [Dev](#dev)
- [Setup env](#setup-env)
- [Clone](#clone)
- [Install](#install)
- [Ex .env](#ex-env)
- [Run](#run)
- [Docs](#docs)
- [Docker](#docker)
- [RabbitMQ](#rabbitmq)
- [Build](#build)
- [Circle CI/CD](#circle-cicd)
- [Helm and k8s](#helm-and-k8s)
- [Server testing vercel app](#server-testing-vercel-app)

---

## Setup env

- **Setup Eslint extension**
- **Setup prettier extension**
- **Setup redis cli**
- **Setup aws cli**
- **Setup docker**
- **Setup CircleCI**
- **Setup Kubernetes**
- **Setup Helm v3**

## Clone

```sh
$ git clone https://github.com/NguyenPhuocMinh/pm-tool-api.git
```

## Install

```sh
$ npm install
```

## Ex .env

- APP_PORT=7979
- APP_HOST=0.0.0.0
- APP_DOCS_PATH=/docs
- APP_MONGO_URI=mongodb://127.0.0.1:27017/pm-tool
- APP_REDIS_URI=redis://localhost:6379
- APP_RABBIT_URI=amqp://localhost ## 5672
- APP_DOMAIN_PATH=http://localhost:3500
- APP_SECRET_KEY=do-biet-day-secret
- APP_AUDIENCE=pm-tool-aud
- APP_ISSUER=http://localhost:3500

## Run

- **Start local**

```sh
$ npm run dev
```

or

```sh
$ node dist/server
```

- **Uni Test**

```sh
$ npm run unit:test
```

- **Check Linter**

```sh
$ npm run lint:check
```

## Docs

```sh
$ http://localhost:7979/docs
```

## Docker

- **Run build docker images**

```sh
$ docker build -t <username>/pm-tool-api:<version> .
```

- **Run build docker images**

```sh
$ docker run -d -p 8080:8080 pm-tool-api
```

## RabbitMQ

- **Run RabbitMQ local docker images**

```sh
$ docker run -d -p 5672:5672 rabbitmq
```

- **Run RabbitMQ Management**

```sh
$ $ docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 rabbitmq:3-management
```

- [Login management with guest / guest](https://localhost:8080)

## Build

- **When merge master so remember**:
  - **Step 1** => go to file config.yml in folder .circleci change APP_DOCKER_TAG and APP_HELM_TAG new version
  - **Step 2** => go to file values.yaml in folder /charts/pm-tool-api change new version docker tag
  - **Step 3** => go to file Chart.yaml in folder /charts/pm-tool-api change new version chart
  - **Step 4** => go to file profiles.js in folder /src/conf change new version

## Circle CI/CD

- **Environment variables**

  - APP_DEPLOYED_USER
  - APP_HOST_NAME
  - APP_DOCKER_IMAGE
  - APP_REPO_URL
  - APP_SSH_FINGERPRINT
  - APP_BASE_PATH_REST_API
  - APP_MONGO_URI

- **Context variables**

  - APP_AWS_ACCESS_KEY
  - APP_AWS_ACCOUNT_ID
  - APP_AWS_REGION
  - APP_AWS_SECRET_KEY
  - APP_DOCKER_PASSWORD
  - APP_DOCKER_USERNAME
  - APP_GITHUB_TOKEN

## Helm and k8s

- Create helm chart

```sh
$ cd helm-charts && helm create pm-tool-api
```

- Check chart

```sh
$ helm lint ./pm-tool-api
```

- Template chart

```sh
$ helm template ./pm-tool-api
```

- Install helm

```sh
$ helm install pm-tool-api ./pm-tool-api
```

- Alias

```sh
$ alias k="kubectl"
```

- Check pods

```sh
$ k get pods
```

- Expose port k8s

```sh
$ k port-forward svc/pm-tool-api 8080:8080
```

- Install ingress-nginx

```sh
$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```

```sh
$ helm install ingress-nginx ingress-nginx/ingress-nginx
```

- Install cert manager

```sh
$ helm repo add jetstack https://charts.jetstack.io
```

```sh
$ helm install cert-manager --namespace cert-manager --create-namespace jetstack/cert-manager --version v1.5.3 --set installCRDs=true
```

```sh
$ k get pods -n cert-manager
```

- Apply issuer

```sh
$ k apply -f issuer.yml
```

```sh
$ k get issuer
```

- Apply ingress

```sh
$ k apply -f new-ingress.yml
```

- Helm package

```sh
$ cd charts && helm package pm-tool-api
```

- Create Repository AWS ECR

```sh
$ aws ecr create-repository \
    --repository-name <chart-name> \
    --region <region>
```

- Login AWS ECR

```sh
$ aws ecr get-login-password --region <region> | helm registry login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
```

- Push helm to AWS ECR

```sh
$ helm push pm-tool-api-<version-tag>.tgz oci://<aws_account_id>.dkr.ecr.<region>.amazonaws.com/
```

- Install helm from AWS ECR

```sh
$ helm install pm-tool-api oci://<aws_account_id>.dkr.ecr.<region>.amazonaws.com/helm-test-chart --version <version-tag>
```

- Describe Helm chart

```sh
$ aws ecr describe-images \
     --repository-name <chart-name> \
     --region <region>
```

- Mounting Environment Variables in a Kubernetes Deployment
  - Add the following lines to the values.yaml file in your Helm chart
  - Create a new file called secret.yaml and add it to the template folder
  - Edit the env section of your Kubernetes deployment to include the new variables defined in the secret.yaml file
  - Set the environment variables to your desired values. For example, set the USERNAME variable to hello_user:
    ```sh
    $ export USERNAME=hello_user
    ```
  - Apply the variables to the Helm chart by combining them with the helm install command:
    ```sh
    $ helm install --set username=$USERNAME [chart name] [chart path]
    ```

## Server testing vercel app

- [Vercel App](https://pm-tool-api.vercel.app)
- Check connect socketIO => curl "https://pm-tool-api.vercel.app/socket.io/?EIO=4&transport=polling"
