import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {v4 as uuid } from 'uuid'
import { StudentType } from './student.type';
import { StudentInput } from './student.input';
import { In } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(StudentType) private studentRepository: Repository<StudentType>){}

   async getAllStudents(): Promise<StudentType[]>{
    return this.studentRepository.find()
   }

   async getStudent(id: string): Promise<StudentType>{
    const student = this.studentRepository.findOne({ where: { id } })
    return student
   }

    async createStudent (createstudentInput: StudentInput): Promise<StudentType> {
        const {firstName, lastName} = createstudentInput
        const student = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        })

        await this.studentRepository.save(student);

        return student; // Return the created lesson
    }

    async getManyStudents(studentId: string[]): Promise<StudentType[]> {
        const students = await this.studentRepository.find({
            where: {
                id: In(studentId)
            }
        });
        console.log(students)
        return students;
    }
    
}
