import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";

 interface RequestExt extends Request {
  user?:string | JwtPayload;
}

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data:"ESTO SOLO LO VE PERSONAS CON SECCION / JWT",
      user:req.user
    })
  } catch (e) {
   handleHttp(res ,  "ERROR_GET_ORDERS");
  }
};



export { getOrders};
