import dotenv from "dotenv";
import connnectDb from "./db/connectDB.js";
import express from "express";
const app = express();

dotenv.config({ path: "./env" });

const port = process.env.PORT || 7000;

connnectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(
                ` Server is running at port : http://localhost:${port}`
            );
        });
    })
    .catch((error) => {
        console.log("Database connection error !!! ", error);
    });
