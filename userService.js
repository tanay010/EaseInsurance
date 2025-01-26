const express = require('express');
const User = require('../models/User'); // Assuming a User model exists
const router = express.Router();
const bcrypt = require('bcrypt');

// User registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) { // Compare hashed password
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
