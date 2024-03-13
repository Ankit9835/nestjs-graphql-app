import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid } from 'uuid'
import { LessonType } from './lesson.type';
import { LessonInput } from './lesson.input';
import { AssignStudentInput } from './assign-student-input';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(LessonType) private lessonRepository: Repository<LessonType>){}

    async getLesson (id: string): Promise<LessonType> {
        return this.lessonRepository.findOne({ where: { id } });
    }

    async getLessons(): Promise<LessonType[]>{
        return this.lessonRepository.find()
    }

    async createLesson (createlessonInput: LessonInput): Promise<LessonType> {
        const {name, startDate, endDate} = createlessonInput
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            students: []
        })

        await this.lessonRepository.save(lesson);

        return lesson; // Return the created lesson
    }

    async assignStudent (lessonId:string,studentId:string[]): Promise<LessonType>{
        const lesson = await this.lessonRepository.findOne({ where: { id: lessonId } });
        if (!lesson) {
          throw new Error(`Lesson with ID ${lessonId} not found.`);
        }
    
        // Check for duplicate studentIds
        const uniqueStudentIds = [...new Set(studentId)]; // Removes duplicates
    
        // Check if any of the studentIds already exist in the lesson's students array
        const existingStudents = lesson.students || [];
        const newStudents = uniqueStudentIds.filter(studentId => !existingStudents.includes(studentId));
        if (newStudents.length === 0) {
          throw new Error('All provided studentIds are already assigned to the lesson.');
        }
    
        // Update the lesson's students array
        lesson.students = [...existingStudents, ...newStudents];
    
        // Save and return the updated lesson
        return this.lessonRepository.save(lesson);
    }
}
