import mongoose from "mongoose";

export async function connectMongo(uri) {
    // validation
    try {
        await mongoose.connect(uri);
        const { host, port, name }= mongoose.connection;
        console.log(`Mongo connected: ${host}:${port}/${name}`);
        
        mongoose.connection.on("error", (error) => {
            console.error("Mongo connection error: ", err);
        });
        
        mongoose.connection.on("disconnected", () => {
            console.error("Mongo disconnection");
        });

        return mongoose.connection;
    } catch(err) {
        console.error("Failed to connect to Mongo:", err?.message || err);
        return err;
    }
}

export { mongoose };