FROM node:18-alpine as builder

WORKDIR /usr/src/app/
USER root

# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets

RUN npm install 

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]