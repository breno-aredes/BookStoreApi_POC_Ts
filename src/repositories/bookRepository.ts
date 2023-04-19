// import db from "config/database";
// import { QueryResult } from "pg";
// import { BookEntity } from "protocols/book";

// async function findByName(name: String): Promise<QueryResult<BookEntity>> {
//   return db.query(
//     `
//     SELECT * FROM books WHERE name=$1
//     `,
//     [name]
//   );
// }

// async function createBook(
//   name: String,
//   author: String,
//   userId: Number
// ): Promise<QueryResult> {
//   return await db.query(
//     `
//         INSERT INTO books (name, author, "userId")
//         VALUES ($1, $2, $3)
//         `,
//     [name, author, userId]
//   );
// }

// export default {
//   findByName,
//   createBook,
// };
