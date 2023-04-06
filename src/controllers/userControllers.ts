import { Request, Response, NextFunction } from "express";
import { User } from "protocols/type.js";
import userServices from "services/userServices.js";

async function signup(req: Request, res: Response, next: NextFunction) {
  const user = req.body as User;
  try {
    await userServices.signup(user);
    return res.send(201);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default {
  signup,
};
