# docker-compose-microservices

Example project using:

* Docker 19.03.x
* Docker Compose 1.25.x


## Installation

Install dev dependencies using:

    docker-compose \
        -f ./service-a/docker-compose.dev.yml \
        -f ./service-b/docker-compose.dev.yml \
        -f ./service-c/docker-compose.dev.yml \
        build

## Usage

Run the server in dev mode:

    docker-compose \
        -f ./service-a/docker-compose.dev.yml \
        -f ./service-b/docker-compose.dev.yml \
        -f ./service-c/docker-compose.dev.yml \
        up

View the frontend at:

    http://localhost:8080


## Debugging

View the merged compose config using:

    docker-compose \
        -f ./service-a/docker-compose.dev.yml \
        -f ./service-b/docker-compose.dev.yml \
        -f ./service-c/docker-compose.dev.yml \
        config


## Directory structure

    /src                      --> Frontend source files


## Contact

For more information please contact kmturley


## Notes

Create service in sub directories using the tutorial at:
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

"when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies."
https://docs.npmjs.com/cli/install#description

"One of the simplest things you can do to improve performance is to set NODE_ENV to “production.”"
https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
