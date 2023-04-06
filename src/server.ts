import express, { json } from "express";
import cors from "cors";
import routes from "routes";

const server = express();

server.use(json());
server.use(cors());
server.use(routes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`rodou file`);
});
