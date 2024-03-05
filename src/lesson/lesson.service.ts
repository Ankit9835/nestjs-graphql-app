import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid } from 'uuid'
import { LessonType } from './lesson.type';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(LessonType) private lessonRepository: Repository<LessonType>){}

    async getLesson (id: string): Promise<LessonType> {
        return this.lessonRepository.findOne({ where: { id } });
    }

    async createLesson (createlessonInput: LessonInput): Promise<LessonType> {
        const {name, startDate, endDate} = createlessonInput
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        })

        await this.lessonRepository.save(lesson);

        return lesson; // Return the created lesson
    }
}
