const mongoose = require("mongoose");

const dbName = "RajatFinal"; // Name of the database
const uri = `mongodb+srv://root:VRPd3ICLK6juCQCa@cluster0.dg4ocjz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log(`Connected to MongoDB database: ${dbName}`);
});

module.exports = connection;
