import db from "config/database.js";

async function findByEmail(email: string) {
  return await db.query(
    `    
        SELECT * FROM users WHERE email=$1
      `,
    [email]
  );
}

async function signup(name: string, email: string, password: string) {
  await db.query(
    `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
        `,
    [name, email, password]
  );
}

async function findById(userId: number) {
  return await db.query(
    `    
        SELECT * FROM users WHERE id=$1
      `,
    [userId]
  );
}

export default {
  findByEmail,
  signup,
  findById,
};
