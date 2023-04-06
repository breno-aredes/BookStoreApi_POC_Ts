import { Router } from "express";
import userRouter from "./user.Routes";

const routes = Router();

routes.use("/user", userRouter);

export default routes;
