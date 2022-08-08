import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, TodoModule],
  controllers: [],
  providers: []
})
export class AppModule {}
