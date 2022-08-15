FROM node:16-slim

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node docker/package.json ./
COPY --chown=node package-lock.json ./
RUN npm install

COPY --chown=node . .
RUN npm run build
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "npm", "run", "prod" ]
