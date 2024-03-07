import mongoose from "mongoose";

const getConnection = async () => {
    console.log("Trying to connect to the datasource")
    try {
        const connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected ::", process.env.CONNECTION_STRING)
    } catch (error) {
        console.log("Unable to connect to database ::", error);
    }
}

export default getConnection;