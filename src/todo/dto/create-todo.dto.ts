import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateTodoDTO {
  @IsUUID()
  @IsNotEmpty()
  ownerUuid: string;

  // TODO: To convert to an enum (which implicitly prevents length issue as well)
  @IsString()
  @IsNotEmpty()
  state: string;

  // TODO: Check length to avoid DB column overflow error
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
