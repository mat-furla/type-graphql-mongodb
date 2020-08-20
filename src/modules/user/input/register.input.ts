import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { isEmailAlreadyExists } from "../validators/isEmailAlreadyExist";

@InputType()
export class RegisterInput {
    @Field()
    @Length(1, 255, { message: "Nome obrigatório" })
    firstName: string;

    @Field()
    @Length(1, 255, { message: "Sobrenome obrigatório" })
    lastName: string;

    @Field()
    @IsEmail({}, { message: "E-mail inválido" })
    @isEmailAlreadyExists({ message: "E-mail inválido" })
    email: string;

    @Field()
    @Length(8, 255, { message: "A senha deve possuir pelo menos 8 caracteres" })
    password: string;
}