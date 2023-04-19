import userRepository from "repositories/userRepository";
import errors from "../errors/index";
import { User } from "protocols/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signup(user: User) {
  const { name, email, password } = user;

  const usermatch = await userRepository.findByEmail(email);

  console.log(usermatch);

  if (usermatch) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepository.signup(name, email, hashPassword);
}

async function signin(userData: User) {
  const { email, password } = userData;

  const user = await userRepository.findByEmail(email);

  if (user) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = jwt.sign({ userId: user.id }, process.env.SECRET_JWT, {
    expiresIn: "1h",
  });

  return token;
}

export default { signup, signin };
