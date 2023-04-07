import { Router } from "express";
import userRouter from "./user.Routes.js";
import bookRouter from "./book.Routes.js";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/book", bookRouter);

export default routes;
