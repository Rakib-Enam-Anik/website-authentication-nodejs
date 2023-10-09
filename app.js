require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/./views/index.htnl");
});

app.post("/register", (req,res) => {
    res.sendFile(__dirname + "/./views/index.htnl");
});

// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found",
    });
});

//handling server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke",
    });
});


app.listen(PORT, ()=> {
    console.log(`server is running at http://localhost:${PORT}`);
});