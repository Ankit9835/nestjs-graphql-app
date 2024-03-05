import { Field, InputType } from "@nestjs/graphql";
import { IsDate, IsDateString, MinLength } from "class-validator";

@InputType()
export class LessonInput {

  @MinLength(1)
  @Field()
  name: string;
 
  @IsDateString()
  @Field(() => String)
  startDate: string;
 
  @IsDateString()
  @Field(() => String)
  endDate: string;
}