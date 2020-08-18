import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";
import { isMovieAlreadyExists } from "./isMovieAlreadyExist";

@InputType()
export class MovieInput {
    @Field()
    @Length(1, 255, { message: "O título deve possuir mais de um caractere" })
    @isMovieAlreadyExists({ message: "Filme já está em cadastrado" })
    title: string;

    @Field()
    release_year: number;

    @Field()
    @Length(1, 512, { message: "A descrição deve possuir mais de um caractere" })
    description: string;

    @Field()
    was_released: boolean;
}