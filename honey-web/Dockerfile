FROM node:10.16.0
WORKDIR /honey-web
COPY ./package.json /honey-web
COPY ./yarn.lock /honey-web
COPY ./tsconfig.json /honey-web
ENV NODE_ENV=development
RUN yarn install
COPY . /honey-web
CMD ["yarn", "dev"]
EXPOSE 9000