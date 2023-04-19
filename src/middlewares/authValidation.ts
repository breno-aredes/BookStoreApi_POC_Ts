import errors from "errors";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import userRepository from "repositories/userRepository";

export default async function authvalidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) throw errors.unauthorizedError();

  const parts = authorization.split(" ");
  if (parts.length !== 2) throw errors.unauthorizedError();

  const [schema, token] = parts;
  if (schema !== "Bearer") throw errors.unauthorizedError();

  const { userId } = jwt.verify(token, process.env.SECRET_JWT) as JwtPayload;

  try {
    const user = await userRepository.findById(userId);

    if (!user) throw errors.unauthorizedError;

    res.locals.user = user;
  } catch (error) {
    next(error);
  }
}
