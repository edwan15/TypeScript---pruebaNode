import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interfaces";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default:"soy descrip"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("User", UserSchema)

export default UserModel