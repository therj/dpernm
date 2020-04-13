FROM node:12
WORKDIR /app

COPY package*.json ./
# RUN rm -r node_modules
# RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
# --silent
# RUN npm install react-scripts@3.4.1 -g
# --silent
# COPY ./public ./public
COPY . .
# EXPOSE 3000
# React's debugging port is 35729
# EXPOSE 35729
# CMD ["npm", "start" ]

# ENV NODE_PATH=/app/node_modules
# ENV PATH=$PATH:/app/node_modules/.bin

