import bookControllers from "controllers/bookControllers";
import { Router } from "express";

const bookRouter = Router();

bookRouter.post("/", bookControllers.createBook);
bookRouter.get("/");
bookRouter.post("/take-book/:id");
bookRouter.get("/my-books");

export default bookRouter;
