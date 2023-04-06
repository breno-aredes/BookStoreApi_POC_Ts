import express, { json } from "express";
import cors from "cors";

const server = express();

server.use(json());
server.use(cors());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`rodou file`);
});
