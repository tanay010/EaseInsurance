const express = require('express');
const Claim = require('../models/Claim'); // Assuming a Claim model exists
const router = express.Router();

// Apply for a new claim
router.post('/', async (req, res) => {
    const { policyId, incidentType, description, location, dateTime, documents } = req.body;
    const newClaim = new Claim({ policyId, incidentType, description, location, dateTime, documents });

    try {
        await newClaim.save();
        res.status(201).json(newClaim);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all claims
router.get('/', async (req, res) => {
    try {
        const claims = await Claim.find();
        res.json(claims);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update claim status
router.patch('/:id/status', async (req, res) => {
    const { status } = req.body;
    try {
        const updatedClaim = await Claim.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!updatedClaim) return res.status(404).send('Claim not found');
        res.json(updatedClaim);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
