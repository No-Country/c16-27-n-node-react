import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB connected to the port ${url}`)

    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        process.exit(1);
    }
}

export default connectionDB;