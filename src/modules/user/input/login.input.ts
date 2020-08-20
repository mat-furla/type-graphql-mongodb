import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";

@InputType()
export class LoginInput {
    @Field()
    @IsEmail({}, { message: "E-mail inválido" })
    email: string;

    @Field()
    @Length(8, 255, { message: "A senha deve possuir pelo menos 8 caracteres" })
    password: string;
}