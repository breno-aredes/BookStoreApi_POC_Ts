import userControllers from "controllers/userControllers";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", userControllers.signup);
userRouter.post("/signup");

export default userRouter;
