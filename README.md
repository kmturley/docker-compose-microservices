# docker-compose-microservices

Example project using:

* Docker 19.03.x
* Docker Compose 1.25.x


## Installation

Ensure the `.env` file contains correct paths to your services:

    COMPOSE_FILE_SEPARATOR=:
    COMPOSE_FILE=./service-node/docker-compose.yml:./service-java/docker-compose.yml:./service-python/docker-compose.yml
    SERVICE_NODE=../service-node
    SERVICE_JAVA=../service-java
    SERVICE_PYTHON=../service-python

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
