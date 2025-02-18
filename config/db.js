const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("monkey");
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;
