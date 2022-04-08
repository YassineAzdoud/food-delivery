const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
dotenv.config();
app.use(express.json)

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

app.get("/", userRoute)

app.listen(process.env.PORT || 6009, () => {
    console.log("Backend server is running");
});