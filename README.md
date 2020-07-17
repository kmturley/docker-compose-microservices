# docker-compose-microservices

Example project using:

* Docker 19.03.x
* Docker Compose 1.25.x


## Installation

Ensure the `.env` file contains correct paths to your services:

    COMPOSE_FILE_SEPARATOR=:
    COMPOSE_FILE=./service-a/docker-compose.dev.yml:./service-b/docker-compose.dev.yml:./service-c/docker-compose.dev.yml
    SERVICE_A=../service-a
    SERVICE_B=../service-b
    SERVICE_C=../service-c

Then install dependencies using:

    docker-compose build


## Usage

Run the server in dev mode:

    docker-compose up

View the frontend at:

    http://localhost:8080


## Debugging

View the merged compose config using:

    docker-compose config


## Directory structure

    /src                      --> Frontend source files


## Contact

For more information please contact kmturley
