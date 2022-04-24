FROM node:18-alpine

WORKDIR /app

COPY sample-project/package.json .
COPY sample-project/yarn.lock .

RUN yarn

COPY sample-project/index.js .
COPY sample-project/views views
COPY sample-project/public public

CMD ["yarn", "start"]

EXPOSE 3000
