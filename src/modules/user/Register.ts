import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import bcript from "bcryptjs";
import { BCRYPT_SALT } from "./../../environments";
import { User } from './../../entity/User';

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello(): Promise<String> {
        return "Hello World"
    }

    @Mutation(() => User)
    async register(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('mail') mail: string,
        @Arg('password') password: string,
    ): Promise<User> {
        const _id = uuidv4();
        const hash = await bcript.hash(password, BCRYPT_SALT);

        const user = await User.create({
            _id: _id,
            firstName,
            lastName,
            mail,
            password: hash
        }).save();

        return user;
    };
};