import { Field, InputType } from "type-graphql";
import { isMovieAlreadyExists } from "./isMovieAlreadyExist";

@InputType()
export class UpdateMovieInput {
    @Field({ nullable: true })
    @isMovieAlreadyExists({ message: "Filme já está em cadastrado" })
    title?: string;

    @Field({ nullable: true })
    release_year?: number;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    was_released?: boolean;
}