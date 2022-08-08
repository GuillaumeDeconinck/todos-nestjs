import { Injectable } from "@nestjs/common";
import { Todo } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTodoDTO } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  getTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany({});
  }

  createTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    // TODO: check if owner exists before creating when users are implemented
    return this.prisma.todo.create({
      data: {
        owner_uuid: createTodoDTO.ownerUuid,
        state: createTodoDTO.state,
        title: createTodoDTO.title,
        description: createTodoDTO.description
      }
    });
  }
}
