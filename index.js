const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
    });

app.get("/api/test", () => {
    console.log("test is successfull")
})

app.listen(process.env.PORT || 6009, () => {
    console.log("Backend server is running");
});