import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";
import { isMovieAlreadyExists } from "../validators/isMovieAlreadyExist";

@InputType()
export class MovieInput {
  @Field()
  @Length(1, 255, { message: "Título obrigatório" })
  @isMovieAlreadyExists({ message: "Filme já está cadastrado" })
  title: string;

  @Field()
  release_year: number;

  @Field()
  @Length(1, 512, { message: "Descrição obrigatória" })
  description: string;

  @Field()
  was_released: boolean;
}