import { Request, Response } from "express";
import { registerNew, loginAcces } from "../services/auth";
import { handleHttp } from "../utils/error.handler";


const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerNew(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "Error", e);
  }
};

const loginUser = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const response = await loginAcces({ email, password });

  if (response === "USUARIO_NO_EXISTE") {
    res.status(403);
    res.send(response);
  } else {
    res.send(response);
  }
};

export { registerUser, loginUser };
