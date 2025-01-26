const express = require('express');
const Claim = require('../models/Claim');
const router = express.Router();

// Apply for a new claim
router.post('/', async (req, res) => {
    const { processId, incidentType, description, profilePhoto } = req.body;

    const newClaim = new Claim({
        processId,
        incidentType,
        description,
        profilePhoto // Include profile photo in the claim
    });

    try {
        await newClaim.save();
        res.status(201).json({ message: 'Claim submitted successfully!', claim: newClaim });
    } catch (error) {
        console.error('Error saving claim:', error); // Log the error
        res.status(500).json({ message: 'Error submitting claim: ' + error.message });
    }
});

// Retrieve claims
router.get('/', async (req, res) => {
    try {
        const claims = await Claim.find();
        res.status(200).json(claims);
    } catch (error) {
        console.error('Error retrieving claims:', error); // Log the error
        res.status(500).json({ message: 'Error retrieving claims: ' + error.message });
    }
});

module.exports = router;
