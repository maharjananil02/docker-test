import express from "express";
import dotenv from "dotenv/config";
import UserRoutes from "./Users/UserRoutes.js";
import getConnection from "./config/dbConnection.js";

getConnection();
const app = express();
app.use(express.json());


app.use("/users", UserRoutes);

app.get("*", (request, response) => {
    response.json({ message: "Bad Request" });
})

app.listen(process.env.PORT, error => {
    if (error) console.log("Error running server");
    else console.log("Server started at port :: ", process.env.PORT);
})