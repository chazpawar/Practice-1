const express = require('express');
const connectDB = require('./config/db.js');
const userRouter = require('./routes/user.routes.js');

const app = express();
const PORT = 6000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    try {
        res.send('Hello World');
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// User routes
app.use('/user', userRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});