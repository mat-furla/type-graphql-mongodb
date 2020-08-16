import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from './modules/user/Register';
import { PORT } from "./environments";

const main = async () => {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [RegisterResolver],
    });
    const app = Express();
    const apolloServer = new ApolloServer({ schema });
    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
    });
}

main();