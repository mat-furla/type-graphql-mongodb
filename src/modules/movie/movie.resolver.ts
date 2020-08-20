import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { v4 as uuidv4 } from "uuid";
import { Movie } from '../../entity/Movie';
import { MovieInput } from "./input/insert.input";
import { UpdateMovieInput } from "./input/update.input";

@Resolver()
export class MovieResolver {
  @Query(() => Movie)
  async getMovie(@Arg("_id") _id: string) {
    const movie = await Movie.findOne({ where: { _id } });
    if (!movie) throw new Error("Filme não encontrado");
    return movie;
  }

  @Query(() => [Movie])
  getMovies() {
    return Movie.find();
  }

  @Mutation(() => Movie)
  async addMovie(@Arg('input') {
    title,
    release_year,
    description,
    was_released
  }: MovieInput): Promise<Movie> {
    const _id = uuidv4();
    const movie = await Movie.create({
      _id: _id,
      title,
      release_year,
      description,
      was_released
    }).save();
    return movie;
  };

  @Mutation(() => Movie)
  async updateMovie(@Arg("_id") _id: string, @Arg("input") input: UpdateMovieInput): Promise<Movie> {
    const movie = await Movie.findOne({ where: { _id } });
    if (!movie) throw new Error("Filme não encontrado");
    Object.assign(movie, input);
    await movie.save();
    return movie;
  }

  @Mutation(() => Movie)
  async deleteMovie(@Arg("_id") _id: string): Promise<Movie | undefined> {
    const movie = await Movie.findOne({ where: { _id } });
    if (!movie) throw new Error("Filme não encontrado");
    movie.remove();
    return movie;
  }
};