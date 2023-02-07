import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const itemSchema = new Schema<Car>(
  {
    name:{
      type:String,
      require:true
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["electric" , "gasoline"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required:true
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", itemSchema)

export default ItemModel