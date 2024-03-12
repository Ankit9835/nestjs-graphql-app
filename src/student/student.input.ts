import { Field, InputType } from "@nestjs/graphql";
import { IsDate, IsDateString, MinLength } from "class-validator";

@InputType()
export class StudentInput {

  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
 
}