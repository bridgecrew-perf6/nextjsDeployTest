FROM node:alpine

# ENV PORT 3000
# ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install && npm install pm2 -g
COPY ./ ./
RUN npm run build

# CMD ["npm", "run", "start-eco-container"]
CMD npm run start-eco-container && pm2 logs
