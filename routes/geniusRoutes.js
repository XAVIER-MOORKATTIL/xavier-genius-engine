const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/recognize
// @desc    Register a new Genius in the Al-Amin Mirror
router.post('/recognize', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newGenius = new User({ name, email });
        await newGenius.save();
        
        res.status(201).json({
            status: "ABSOLUTELY YES",
            message: "Genius Identity Permanently Recorded.",
            data: newGenius
        });
    // inside router.post('/recognize'...)
} catch (error) {
    console.log("DB ERROR:", error.message); // This will show in your TERMINAL
    res.status(400).json({ status: "FAILURE", message: error.message });
}
});

module.exports = router;