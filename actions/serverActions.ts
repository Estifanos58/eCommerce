"use server"

import { connect } from "./db"
import User from "./model";
import bcrypt from "bcryptjs";

export const LoginFunction = async (email: string, password: string) => { 
   await connect();

   const user = await User.find({email});
   if(!user) {
    return {error: "User not Found",message:"", success: false ,data:null}
   }
   const isPasswordValid = await bcrypt.compare(password, user[0].password);
   if(!isPasswordValid) {
    return {error: "Invalid Password",message:"", success: false, data: null}
   }

   return {error: "", message: "Login successful", success: true, data: user[0]};
   // if()
}
export const RegisterFunction = async (email: string, password: string, fullName: string) => {
   await connect();

   const user = await User.find({email});
   if(user.length > 0) {
    return {error: "User already exists", message: "",  success: false, data: null}
   }
   const encryptedPassword = await bcrypt.hash(password, 10);
   const newUser = new User({email, password: encryptedPassword, fullName});
   await newUser.save();
   return {message: "User created successfully",error: "", success: true, data: newUser}
}