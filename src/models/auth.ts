import {Schema , Types , model , Model} from "mongoose"
import { Auth } from "../interfaces/auth.interfaces"


const authSchema = new Schema<Auth>({
  email:{
    type:String
  },
  password:{
    type:String
  }
})
const  authItem = model("auth", authSchema)
export {authItem}
