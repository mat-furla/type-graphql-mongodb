import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import bcript from "bcryptjs";
import { BCRYPT_SALT } from "../../environments";
import { User } from '../../entity/User';
import { SignUpInput } from "./SignUp/SignUpInput";

@Resolver()
export class SignUpResolver {
    @Query(() => String)
    async hello(): Promise<String> {
        return "Hello World"
    }

    @Mutation(() => User)
    async signup(@Arg('input') {
        firstName,
        lastName,
        mail,
        password
    }: SignUpInput): Promise<User> {
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