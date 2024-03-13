import { StudentType } from "src/student/student.type";
import { LessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AssignStudentInput } from "./assign-student-input";
import { StudentService } from "src/student/student.service";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService,
                private studentService: StudentService
        ){}

    @Query(returns => LessonType)
    lesson (@Args('id') id:string): Promise<LessonType> {
        return this.lessonService.getLesson(id)
    }

    @Query(returns => [LessonType])
    lessons(){
        return this.lessonService.getLessons()
    }

    @Mutation(returns => LessonType)
    createLesson( 
        @Args('createLessonInput') createLessonInput:LessonInput
    ) {
        return this.lessonService.createLesson(createLessonInput)
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentInput') assignStudentInput:AssignStudentInput){
            const {lessonId, studentId} = assignStudentInput
            return this.lessonService.assignStudent(lessonId, studentId)
        } 
    

        @ResolveField()
        async students(@Parent() lesson: LessonType){
            console.log(lesson)
            return this.studentService.getManyStudents(lesson.students)
        }
}
