import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
 
@ObjectType('Lesson')
@Entity({ name: 'Lesson' })
export class LessonType {
  @ObjectIdColumn()
  _id: string;
 
  @Field(() => ID)
  @PrimaryColumn()
  id: string;
 
  @Field()
  @Column()
  name: string;
 
  @Field()
  @Column()
  startDate: string;
 
  @Field()
  @Column()
  endDate: string;
}