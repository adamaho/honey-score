import * as path from 'path';
import * as koa from 'koa';
import * as jwt from 'jsonwebtoken';

import {
  ApolloServer
} from 'apollo-server-koa';

import {
  createConnection
} from 'typeorm';

import {
  fileLoader,
  mergeTypes,
  mergeResolvers
} from 'merge-graphql-schemas';

import {
  applyMiddleware
} from 'graphql-middleware';

const port = 8000;

// fetch all of the files that have defined graphql schema
const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));
const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));

// merge the types and resolvers into one file
const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);


// Check auth token against the secret
const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, 'jwt_secret');
    }
  } catch (error) {
    return null;
  }
}

const logResult = async (resolve, root, args, context, info) => {
  console.log(`2. logResult`)
  const result = await resolve(root, args, context, info)
  console.log(context);
  return result
};

const schema = applyMiddleware({
  typeDefs,
  resolvers,
  logResult
});

// Init the apollo server
const server = new ApolloServer({
  schema,
  context: ({ ctx: { request }}) => {
    const tokenWithBearer = request.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    const user = getUser(token);

    return {
      user
    };
  }
});

// Init the koa app
const app = new koa();

// attach koa app to the Apollo Server
server.applyMiddleware({ app });

// create connection to db
createConnection().then(async () => {
  app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));
})
.catch((error) => console.log('TypeORM connection error: ', error));