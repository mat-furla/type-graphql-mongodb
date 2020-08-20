import { Entity, BaseEntity, Column, ObjectIdColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
    @Field()
    @ObjectIdColumn()
    _id: string;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    email: string;

    @Column("text", { nullable: false, select: false })
    password: string;
}