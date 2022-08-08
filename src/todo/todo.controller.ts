import { Controller, Get } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller("todos")
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  async getTodos() {
    return await this.service.getTodos();
  }
}
