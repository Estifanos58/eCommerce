import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
export const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if(connectionState === 1) {
        console.log("Already connected to MongoDB.");
        return;
    }
    if(connectionState === 2) {
        console.log("Connecting to MongoDB...");
        return;
    }
    if(connectionState === 3) {
        console.log("Disconnecting from MongoDB...");
        return;
    }

    if(connectionState === 0) {
        try {
            console.log("Connecting to MongoDB...");
            await mongoose.connect(MONGODB_URI);
            console.log("Connected to MongoDB.");
        } catch (error) {
            console.log("Error connecting to MongoDB:", error);
            throw error;
        }
        
    }
}