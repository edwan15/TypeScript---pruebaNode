import { NextFunction, Request, Response } from "express";
import { verifToken } from "../utils/json.handler";

import { JwtPayload } from "jsonwebtoken";

 interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const isOk = verifToken(`${jwt}`);
    if (!isOk) {
      res.status(401);
      res.send("TOKEN_NO_ES_VALIDO");
    } else {
      console.log(jwtByUser);
      next();
    }
  } catch (error) {
    res.status(500);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
