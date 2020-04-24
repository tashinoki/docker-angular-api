
FROM node

RUN npm install -g @angular/cli

WORKDIR /application/app

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--live-reload=false"]