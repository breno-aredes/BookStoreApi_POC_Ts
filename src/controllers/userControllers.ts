import { Request, Response, NextFunction } from "express";
import { User } from "protocols/user.js";
import userServices from "services/userServices.js";

async function signup(req: Request, res: Response, next: NextFunction) {
  const user = req.body as User;
  try {
    await userServices.signup(user);
    return res.send(201);
  } catch (error) {
    next(error);
  }
}

async function signin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as User;

  try {
    await userServices.signin({ email, password });
  } catch (error) {
    next(error);
  }
}

export default {
  signup,
  signin,
};
