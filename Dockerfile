FROM node/18-buster-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY ./ /usr/src/app
WORKDIR /usr/src/app

RUN npm install

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

CMD [ "npx", "ts-node", "src/index.ts" ]