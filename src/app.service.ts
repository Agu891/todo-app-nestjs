import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todos, TodosDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './Dtos/create-todo.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todos.name) private todoModel: Model<TodosDocument>,
  ) {}
  async getTodos(): Promise<Todos[]> {
    return this.todoModel.find().exec();
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todos> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async updateTodo(id: Object, isComplete: Boolean) {
    await this.todoModel.findByIdAndUpdate(id, { isComplete }, { new: true });
  }

  async deleteTodo(id: string) {
    await this.todoModel.findByIdAndDelete(id);
  }
}
