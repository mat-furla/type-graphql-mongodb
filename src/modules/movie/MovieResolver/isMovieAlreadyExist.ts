import { Movie } from '../../../entity/Movie';
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class isMovieAlreadyExistsConstraint implements ValidatorConstraintInterface {
    validate(title: string) {
        return Movie.findOne({ where: { title } }).then(title => {
            if (title) return false;
            return true;
        });
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