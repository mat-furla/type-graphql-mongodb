import { Entity, BaseEntity, Column, ObjectIdColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("movies")
export class Movie extends BaseEntity {
  @Field()
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  release_year: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ default: false })
  was_released: boolean;
}