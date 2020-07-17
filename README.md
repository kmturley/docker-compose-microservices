# docker-compose-microservices

Example project using:

* Docker 19.03.x
* Docker Compose 1.25.x


## Installation

Install dependencies using:

    docker-compose \
        -f ./service-a/docker-compose.yml \
        -f ./service-b/docker-compose.yml \
        -f ./service-c/docker-compose.yml \
        build


## Usage

Run the server:

    docker-compose \
        -f ./service-a/docker-compose.yml \
        -f ./service-b/docker-compose.yml \
        -f ./service-c/docker-compose.yml \
        up

View the frontend at:

    http://localhost:8080


## Debugging

View the merged compose config using:

    docker-compose \
        -f ./service-a/docker-compose.yml \
        -f ./service-b/docker-compose.yml \
        -f ./service-c/docker-compose.yml \
        config


## Directory structure

    /src                      --> Frontend source files


## Contact

For more information please contact kmturley


## Notes

Create service in sub directories using the tutorial at:
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

