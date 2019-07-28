FROM node:10.16.0
WORKDIR /honey-server
COPY ./package.json /honey-server
COPY ./yarn.lock /honey-server
COPY ormconfig.json /honey-server
ENV NODE_ENV=development
ENV TOKEN_SECRET=bryanne_is_my_favourite
RUN yarn install
COPY . /honey-server
CMD ["yarn", "dev"]
EXPOSE 8000
