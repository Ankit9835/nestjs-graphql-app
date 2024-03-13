import { Field, ID, InputType } from "@nestjs/graphql";
import { IsDate, IsDateString, IsUUID, MinLength } from "class-validator";
import { UUID } from "typeorm/driver/mongodb/bson.typings";

@InputType()
export class AssignStudentInput {

  @IsUUID()
  @Field(type => ID)
  lessonId: string;
 
  
  @Field(() => [ID])
  studentId: string[];
}