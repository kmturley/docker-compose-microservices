# docker-compose-microservices

Example project using:

* Docker 19.03.x
* Docker Compose 1.25.x


## Installation

Update `schema.yaml` to match your API design.

Install openapi-generator-cli:

    npm install @openapitools/openapi-generator-cli

List generators:

    npx @openapitools/openapi-generator-cli list

Generate your service:

    npx @openapitools/openapi-generator-cli generate -i ./schema.yaml -g nodejs-express-server -o ./service-a
    cd service-a
    npm i --package-lock-only
    cd ..

Copy in your service template files:

    cp -rv ./service-template/* ./service-a

Then replace TEMPLATE_NAME variable with the SERVICE_D name:

    sed -e "s/\${i}/1/" -e "s/\${TEMPLATE_NAME}/SERVICE_A/" ./service-template/docker-compose.yml > ./service-a/docker-compose.yml
    sed -e "s/\${i}/1/" -e "s/\${TEMPLATE_NAME}/SERVICE_A/" ./service-template/docker-compose.dev.yml > ./service-a/docker-compose.dev.yml

Ensure the `.env` file contains correct paths to your services:

    COMPOSE_FILE_SEPARATOR=:
    COMPOSE_FILE=./service-a/docker-compose.dev.yml
    SERVICE_A=../service-a

Then install dependencies using:

    docker-compose build


## Usage

Run the server using:

    docker-compose up

View the service at:

    http://localhost:3000/api-doc


## Debugging

View the merged compose config using:

    docker-compose config


## Directory structure

    /src                      --> Frontend source files


## Contact

For more information please contact kmturley
