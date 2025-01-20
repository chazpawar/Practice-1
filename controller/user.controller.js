const User = require("../models/user.model");

const signup = async function(req, res) {
    try {
        const { name, email, password, dob } = req.body;
        
        if (!name || !email || !password || !dob) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({
            name,
            email,
            password,
            dob: new Date(dob),
        });

        await newUser.save();
        res.status(201).json({ msg: 'User created successfully', user: newUser });
        
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
}

module.exports = signup;