import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import express from "express";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());
  const server = new ApolloServer({
    typeDefs: `type Query {
                hello :String
            } `,
    resolvers: {
      Query: {
        hello: () => `fge`,
      },
    },
  });
  await server.start();
  app.use("/graphql", expressMiddleware(server));

  return app;
}
