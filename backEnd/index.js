const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
//Routes

//connect to db

//Listening

app.listen(8080,()=>{console.log("port connected 8080..")});