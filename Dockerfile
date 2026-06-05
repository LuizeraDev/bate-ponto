FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install --ignore-engines --network-timeout 600000

COPY . .

EXPOSE 3000

CMD ["npm", "start"]