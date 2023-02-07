import { Car } from "../interfaces/car.interfaces";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  const responseItem = await ItemModel.create(item);
  return responseItem;
};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: String) => {
  const responseCar = await ItemModel.findOne({ _id: id });
  return responseCar;
};

const updateCar = async (id: String, data: Car) => {
  const UpdateCar = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return UpdateCar;
};

const deleteCar = async (id: String) => {
  const responseCar = await ItemModel.remove({ _id: id });
  return responseCar;
};

export { insertItem, getCars, getCar, updateCar, deleteCar };
