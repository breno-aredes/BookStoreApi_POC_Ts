import supertest from "supertest";
import server from "../src/server";
import db from "config/database";

const api = supertest(server);

beforeAll(async () => {
  await db.users.deleteMany({});
});

afterAll(async () => {
  await db.users.deleteMany({});
});

describe("testando signup", () => {
  it("testando post: /signup", async () => {
    //SuperTest fazendo a requisição na api
    const result = await api.post("/signup").send({
      name: "breno",
      email: "breno@teste.com",
      password: "123321",
    });

    expect(result.status).toBe(201);
  });
});
