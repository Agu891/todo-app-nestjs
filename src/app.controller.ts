import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Todos } from './schemas/todo.schema';
import { CreateTodoDto } from './Dtos/create-todo.dto';
import { UpdateTodoDto } from './Dtos/update-todo.dto';

@Controller('/todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getTodos(): Promise<Todos[]> {
    return this.appService.getTodos();
  }

  @Post('/')
  createTodos(@Body() body: CreateTodoDto) {
    return this.appService.createTodo(body);
  }

  @Put('/')
  updateTodo(@Body() body: UpdateTodoDto) {
    return this.appService.updateTodo(body.id, body.isComplete);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(id);
  }
}
