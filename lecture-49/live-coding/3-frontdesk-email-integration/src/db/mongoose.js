import mongoose from "mongoose";

export async function connectMongo(uri) {
    try {
        await mongoose.connect(uri);
        console.log("Mongodb connected");
    } catch(err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
    mongoose.connection.on("disconnected", () => {
        console.warn("MongoDB disconnected");
    })
}