FROM node:latest as build-stage
WORKDIR /mathgame/app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /mathgame/app
COPY --from=build-stage /mathgame/app/dist /mathgame/app
COPY nginx.conf /etc/nginx/nginx.conf