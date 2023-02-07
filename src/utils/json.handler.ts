import { verify, sign } from "jsonwebtoken";

const JWT_TOKEN = process.env.JWT_SECRET || "token.10101010";

const crearToken =  (id: string) => {
  const jwt =  sign({ id }, JWT_TOKEN, {
    expiresIn: "2h",
  });

  return jwt;
};

const verifToken =  (jwt: string) => {
  const isOk =  verify(jwt, JWT_TOKEN);

  return isOk;
};

export { crearToken, verifToken };
