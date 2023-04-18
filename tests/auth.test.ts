import supertest from "supertest";
import server from "../src/server";

const api = supertest(server);

describe("testando signup", () => {
  it("testando post: /signup", async () => {
    //SuperTest fazendo a requisição na api
    const result = await api.post("/signup").send({
      name: "breno",
      email: "breno@teste2.com",
      password: "123321",
    });

    expect(result.status).toBe(201);
  });
});
