import UserModel from "../models/user";
import { User } from "../interfaces/user.interfaces";
import { encrypt, verified } from "../utils/encryp.handler";
import { Auth } from "../interfaces/auth.interfaces";
import { crearToken } from "../utils/json.handler";

const registerNew = async ({ email, name, password }: User) => {
  const emailis = await UserModel.findOne({ email });
  if (emailis) return "email Existe";
  const passHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerUser;
};

const loginAcces = async ({ email, password }: Auth) => {
  const emailis = await UserModel.findOne({ email });
  if (!emailis) return "email no  Existe";
  const passwordHash = emailis.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "USUARIO_NO_EXISTE";
  const token = crearToken(emailis.email);

  const data = {
    token,
    user: emailis,
  };
  return data;
};

export { registerNew, loginAcces };
