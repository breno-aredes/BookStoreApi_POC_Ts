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

export default {
  findByEmail,
  signup,
};
