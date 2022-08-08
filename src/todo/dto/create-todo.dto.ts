import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateTodoDTO {
  @IsUUID()
  @IsNotEmpty()
  ownerUuid: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
