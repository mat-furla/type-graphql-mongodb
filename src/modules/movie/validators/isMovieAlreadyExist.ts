import { Movie } from '../../../entity/Movie';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class isMovieAlreadyExistsConstraint implements ValidatorConstraintInterface {
  async validate(title: string) {
    const title_1 = await Movie.findOne({ where: { title } });
    if (title_1)
      return false;
    return true;
  }
}

export function isMovieAlreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: isMovieAlreadyExistsConstraint,
    });
  };
}