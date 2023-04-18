import express, { json } from "express";
import cors from "cors";
import routes from "routes";
import { handleApplicationErrors } from "middlewares/handleApplicationErrors";

const server = express();

server.use(json());
server.use(cors());
server.use(routes);
server.use(handleApplicationErrors);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`rodou file na` + port);
});

export default server;
