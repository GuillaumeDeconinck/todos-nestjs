import { Injectable } from "@nestjs/common";
import { Todo } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  getTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }
}
