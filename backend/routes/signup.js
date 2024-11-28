const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // User model
const router = express.Router();

// Sign-up API endpoint
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input fields
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save user in the database
        await newUser.save();

        res.status(200).json({ success: true, message: 'User signed up successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error signing up user', error: error.message });
    }
});

module.exports = router;
