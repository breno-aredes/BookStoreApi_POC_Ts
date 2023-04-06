import userRepository from "repositories/userRepository.js";
import errors from "../errors/index.js";
import { User } from "protocols/type.js";
import bcrypt from "bcrypt";

async function signup(user: User) {
  const { name, email, password } = user;

  const { rowCount } = await userRepository.findByEmail(email);
  if (rowCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.signup(name, email, hashPassword);
}

export default { signup };
