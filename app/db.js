// db.js

const mongoose = require('mongoose');
require('dotenv').config();

// Set strictQuery to false to prepare for Mongoose 7


function connectToDatabase() {
    // Your MongoDB connection URI 
    mongoose.set('strictQuery', false);
    const mongoURI = process.env.MONGODB_CONNECTION_STRING;
    console.log(mongoURI)

    // Connect to MongoDB
    mongoose.connect(mongoURI).then(() => console.log('Connected to MongoDB...',mongoURI));
    mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection is open ");
    //   master();
     
     });
}

// Call the connectToDatabase function to establish the connection
connectToDatabase

module.exports = connectToDatabase; // You can export Mongoose instance if needed elsewhere
