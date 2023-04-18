import { Router } from "express";
import userRouter from "./user.Routes";
import bookRouter from "./book.Routes";

const routes = Router();

routes.use("/", userRouter);
routes.use("/book", bookRouter);

export default routes;
