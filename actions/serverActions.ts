import { connect } from "./db"
import User from "./model";

export const LoginFunction = async (email: string, password: string) { 
   await connect();

   const user = await User.find({email});
   if(!user) {
    return {error: "User not Found", success: false}
   }
   if()
}