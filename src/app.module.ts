
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonType } from './lesson/lesson.type';
import { StudentModule } from './student/student.module';
import { StudentType } from './student/student.type';



@Module({
   imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url: '',
      synchronize: true,
      useUnifiedTopology: true,
      entities:[
        LessonType,
        StudentType
      ]
  }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
