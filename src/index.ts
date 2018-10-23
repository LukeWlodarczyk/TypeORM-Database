import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import * as path from "path";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { createServer } from "http";

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
