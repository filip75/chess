FROM node:15.10.0-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

CMD ["npm", "start"]