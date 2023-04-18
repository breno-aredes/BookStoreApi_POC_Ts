import { Request, Response, NextFunction } from "express";
import { NewBook } from "protocols/book";
import bookServices from "services/bookServices";

async function createBook(req: Request, res: Response, next: NextFunction) {
  const { name, author } = req.body as NewBook;

  const userid = res.locals.user.id as number;

  try {
    await bookServices.createBook(name, author, userid);
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

export default {
  createBook,
};
