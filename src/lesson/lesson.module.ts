import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Module({
    imports: [TypeOrmModule.forFeature([LessonType])],
    providers: [LessonResolver, LessonService],
})
export class LessonModule {}
