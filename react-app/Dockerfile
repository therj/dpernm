FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# --silent
# RUN npm install react-scripts@3.4.1 -g
# --silent
COPY . .
# EXPOSE 3000
# React's debugging port is 35729
# EXPOSE 35729
# CMD [ "npm", "start" ]
# ENV NODE_PATH=/usr/src/app/node_modules
# ENV PATH=$PATH:/usr/src/app/node_modules/.bin

