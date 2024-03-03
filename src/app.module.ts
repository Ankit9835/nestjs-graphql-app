
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonType } from './lesson/lesson.type';



@Module({
   imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url: 'mongodb+srv://ankit40611:6202017915Aa@cluster0.pwu8i.mongodb.net/school?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities:[
        LessonType,
      ]
  }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
