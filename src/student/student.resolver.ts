import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { StudentInput } from "./student.input";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService){}

    @Query(returns => [StudentType])
    getStudents(){
        return this.studentService.getAllStudents()
    }

    @Query(returns => StudentType)
    getSingleStudent(@Args('id') id:string): Promise<StudentType>{
        return this.studentService.getStudent(id)
    }

    @Mutation(returns => StudentType)
    createStudents( 
        @Args('createStudentInput') createStudentInput:StudentInput
    ) {
        return this.studentService.createStudent(createStudentInput)
    }
}