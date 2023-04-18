import errors from "errors";
import bookRepository from "repositories/bookRepository";

async function createBook(name: string, author: string, userId: number) {
  const {
    rows: [book],
  } = await bookRepository.findByName(name);

  if (book) throw errors.conflictError("book already exists");

  await bookRepository.createBook(name, author, userId);
}

export default {
  createBook,
};
