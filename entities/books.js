const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const bookDb = mongoose.model("300351928-Rajat", bookSchema)

module.exports = {bookDb, bookSchema}