import db from "config/database";

async function findByEmail(email: string) {
  return db.users.findUnique({
    where: { email },
  });
}

async function signup(name: string, email: string, password: string) {
  return db.users.create({
    data: {
      name,
      email,
      password,
    },
  });
}

async function findById(userId: number) {
  return db.users.findUnique({
    where: { id: userId },
  });
}

export default {
  findByEmail,
  signup,
  findById,
};
