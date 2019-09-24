const express = require("express");
const mongoose = require("mongoose");

const api = express();
api.use(express.json());

const mongoDBURL = "mongodb+srv://root_mongo:mongo_root_123@cluster-api-crud-umpuh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

api.use("/my_api", require("./src/routes/router"));

api.listen(8989, () => {
    console.log("Server is running...");
});