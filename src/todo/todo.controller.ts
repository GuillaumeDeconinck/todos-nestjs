import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTodoDTO } from "./dto/create-todo.dto";
import { TodoService } from "./todo.service";

@Controller("todos")
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  async getTodos() {
    return await this.service.getTodos();
  }

  @Post()
  async createTodo(@Body() createTodoDTO: CreateTodoDTO) {
    return await this.service.createTodo(createTodoDTO);
  }
}
