const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

app.use(express.json())

app.use(cors())

const db = require("./DB/dbconnection.js")
const model = require("./entities/books")
const Qrouter = require("./services/services.js")

app.use(Qrouter);

app.listen(5000, (req, res) => {
    console.log("listening")
})