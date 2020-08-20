import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { PORT } from "./environments";
import { UserResolver } from './modules/user/user.resolver';
import { MovieResolver } from './modules/movie/movie.resolver';

const main = async () => {
  //let retries = 5;
  //while (retries) {
  //  try {
  //    await createConnection();
  //    break;
  //  } catch (err) {
  //    console.log(err);
  //    retries -= 1;
  //    console.log(`Retries left: ${retries}`)
  //    await new Promise(res => setTimeout(res, 5000));
  //  }
  //}

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        MovieResolver
      ],
    }),
    context: ({ req, res }) => ({ req, res })
  });

  const app = Express();
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
}

main();