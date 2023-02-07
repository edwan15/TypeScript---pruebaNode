import { Request, Response } from "express";
import {
  insertItem,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";
import { handleHttp } from "../utils/error.handler";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GETS_ITEM");
  }
};

const updateItem = async ({params , body}: Request, res: Response) => {

  try {
    const {id} = params
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const response = await insertItem(req.body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};
const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params
    const response = await deleteCar(id)
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
