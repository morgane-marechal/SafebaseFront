## Fichier : ./safebasefront/Dockerfile
FROM node:18.10.0-alpine3.15

WORKDIR /usr/src/app/safebasefront

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]