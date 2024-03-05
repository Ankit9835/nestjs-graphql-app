import { LessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService){}

    @Query(returns => LessonType)
    lesson (@Args('id') id:string): Promise<LessonType> {
        return this.lessonService.getLesson(id)
    }

    @Mutation(returns => LessonType)
    createLesson( 
        @Args('createLessonInput') createLessonInput:LessonInput
    ) {
        return this.lessonService.createLesson(createLessonInput)
    }
}