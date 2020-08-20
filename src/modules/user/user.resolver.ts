import { Resolver, Mutation, Arg, Query, ObjectType, Field, Ctx, UseMiddleware } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";

import { MyContext } from './../../MyContext';
import { User } from '../../entity/User';
import { RegisterInput } from "./input/register.input";
import { LoginInput } from "./input/login.input";
import { createRefreshToken, createAccessToken } from './auth/auth';
import { isAuth } from './auth/isAuth';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
}

@Resolver()
export class UserResolver {

  @Query(() => [User])
  @UseMiddleware(isAuth)
  users() {
    return User.find();
  }

  @Mutation(() => User)
  async register(@Arg('input') {
    firstName,
    lastName,
    email,
    password
  }: RegisterInput): Promise<User> {
    const _id = uuidv4();
    const hash = await argon2.hash(password, { type: argon2.argon2id });
    const user = User.create({
      _id: _id,
      firstName,
      lastName,
      email,
      password: hash
    })

    try {
      await user.save()
    } catch {
      throw new Error("Falha ao registrar")
    }

    return user;
  };

  @Mutation(() => LoginResponse)
  async login(@Arg('input') {
    email,
    password
  }: LoginInput, @Ctx() { res }: MyContext): Promise<LoginResponse> {
    // Usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Email ou senha inválidos");
    };

    // Senha válida
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      throw new Error("Email ou senha inválidos");
    };

    // Cria Refresh Token
    res.cookie('qid', createRefreshToken(user), { httpOnly: true });

    // Retorna Access Token
    return {
      accessToken: createAccessToken(user)
    }
  };
};