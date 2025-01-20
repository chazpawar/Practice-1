const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://chaitanya09pawar:admin@kalvi.6sq9n.mongodb.net/");
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;