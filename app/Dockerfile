# Dockerfile
FROM node:21

WORKDIR /app/personal-site

RUN apt-get update

RUN npm i -g @quasar/cli
RUN npm i pinia
RUN npm i vue
RUN npm i vue-router
RUN npm i axios
RUN npm i js-yaml
RUN npm i lodash

# BASE IMAGE ABOVE

COPY . /app
RUN npm i quasar

RUN quasar build personal-site

RUN chmod -R 555 /app

USER 1000

CMD ["quasar", "serve", "dist/spa", "--port", "9000", "--hostname", "0.0.0.0", "--history"]