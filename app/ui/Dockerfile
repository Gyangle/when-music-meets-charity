# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json  ./

RUN yarn

COPY ./ /app/

RUN yarn run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage ./app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80