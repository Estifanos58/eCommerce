"use server"

import { connect } from "./db"
import User from "./model";
import bcrypt from "bcryptjs";

export const LoginFunction = async (email: string, password: string) => { 
   try {
      await connect();

      const user = await User.findOne({email}).select('email password fullName');
      if(!user) {
         return {error: "User not Found", message: "", success: false, data: null}
      }
      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if(!isPasswordValid) {
         return {error: "Invalid Password", message: "", success: false, data: null}
      }

      // Return only the necessary data
      return {
         error: "", 
         message: "Login successful", 
         success: true, 
         data: {
            email: user.email,
            fullName: user.fullName
         }
      };
   } catch (error) {
      return {error: "An error occurred", message: "", success: false, data: null}
   }
}

export const RegisterFunction = async (email: string, password: string, fullName: string) => {
   try {
      await connect();

      const existingUser = await User.findOne({email});
      if(existingUser) {
         return {error: "User already exists", message: "", success: false, data: null}
      }
      
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({email, password: encryptedPassword, fullName});
      await newUser.save();
      
      // Return only the necessary data
      return {
         message: "User created successfully",
         error: "", 
         success: true, 
         data: {
            email: newUser.email,
            fullName: newUser.fullName
         }
      };
   } catch (error) {
      return {error: "Registration failed", message: "", success: false, data: null}
   }
}