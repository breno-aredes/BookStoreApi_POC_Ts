import { Request, Response, NextFunction } from "express";
import { NewBook } from "protocols/book.js";
import bookServices from "services/bookServices.js";

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
