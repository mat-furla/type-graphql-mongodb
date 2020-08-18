import { Field, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { isEmailAlreadyExists } from "./isEmailAlreadyExist";

@InputType()
export class SignUpInput {
    @Field()
    @Length(1, 255, { message: "O nome deve possuir mais de um caractere" })
    firstName: string;

    @Field()
    @Length(1, 255, { message: "O sobrenome deve possuir mais de um caractere" })
    lastName: string;

    @Field()
    @IsEmail({}, { message: "E-mail inválido" })
    @isEmailAlreadyExists({ message: "E-mail já está em uso" })
    mail: string;

    @Field()
    // Procurar como fazer validação da senha
    @Length(7, 255, { message: "A senha deve possuir pelo menos 8 caracteres" })
    password: string;
}