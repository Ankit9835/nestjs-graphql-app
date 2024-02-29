
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { LessonModule } from './lesson/lesson.module';



@Module({
  imports: [
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
