import userControllers from "controllers/userControllers";
import { Router } from "express";
import { validateSchema } from "middlewares/validateSchema";
import { signupSchema } from "schemas/userSchemas";

const userRouter = Router();

userRouter.post(
  "/signup",
  validateSchema(signupSchema),
  userControllers.signup
);
userRouter.post("/signup");

export default userRouter;
