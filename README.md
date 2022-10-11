# Project management tool api

## Setup EC2

- ssh to vm ec2 => sudo ssh -i pm-tool.pem ubuntu@54.254.202.214
- Build docker image => docker build --tag pm-tool .
- Run docker image to container => docker run -d -p 8080:8080 pm-tool
- Run docker compose => docker-compose -f docker-compose.yml up --build
- Login docker => docker login -u minhnguyen55
- Token docker => dckr_pat_4zTPZdFEPYWa1zYk3OQgrTbtchw
- Github token => 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