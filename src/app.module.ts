import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Database } from './database.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, TodosDocument, TodosSchema } from './schemas/todo.schema';
@Module({
  imports: [
    Database,
    MongooseModule.forFeature([{ name: Todos.name, schema: TodosSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
