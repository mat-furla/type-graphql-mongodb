import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { SignUpResolver } from './modules/user/SignUp';
import { MovieResolver } from './modules/movie/MovieResolver';
import { PORT } from "./environments";

const main = async () => {
    let retries = 5;
    while (retries) {
        try {
            await createConnection();
            break;
        } catch (err) {
            console.log(err);
            retries -= 1;
            console.log(`Retries left: ${retries}`)
            await new Promise(res => setTimeout(res, 5000));
        }
    }

    const schema = await buildSchema({
        resolvers: [SignUpResolver, MovieResolver],
    });
    const app = Express();
    const apolloServer = new ApolloServer({ schema });
    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
    });
}

main();