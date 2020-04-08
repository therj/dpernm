FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# React's debugging port is 35729
# EXPOSE 35729
CMD [ "npm", "start" ]
