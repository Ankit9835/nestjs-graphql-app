import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
 
@ObjectType('Student')
@Entity({ name: 'Student' })
export class StudentType {
  @ObjectIdColumn()
  _id: string;
 
  @Field(() => ID)
  @PrimaryColumn()
  id: string;
 
  @Field()
  @Column()
  firstName: string;
 
  @Field()
  @Column()
  lastName: string;
}