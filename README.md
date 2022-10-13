# Project management tool api

## Setup

- **Build and push docker image to DockerHub:**

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