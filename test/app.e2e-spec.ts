import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";

describe("Todos API (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // Delete all Todos
    const prismaService = app.get(PrismaService);
    await prismaService.todo.deleteMany({});
  });

  describe("/todos", () => {
    it("should GET an empty array", () => {
      return request(app.getHttpServer()).get("/todos").expect(200).expect([]);
    });

    it("should correctly POST a new todo", () => {
      return request(app.getHttpServer())
        .post("/todos")
        .send({
          ownerUuid: "326a9526-595d-47fe-98a8-ae30b940eb67",
          state: "ACTIVE",
          title: "Wash the dishes"
        })
        .expect(201);
    });

    it("should GET an array with one todo", async () => {
      const res = await request(app.getHttpServer()).get("/todos").expect(200);
      expect(res.body.length).toEqual(1);
    });
  });
});
