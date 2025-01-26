const express = require('express');
const Policy = require('../models/Policy');
const router = express.Router();

// Create a new policy
router.post('/', async (req, res) => {
    const { policyName, coverageDetails } = req.body;
    const newPolicy = new Policy({ policyName, coverageDetails });

    try {
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all policies
router.get('/', async (req, res) => {
    try {
        const policies = await Policy.find();
        res.json(policies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a policy
router.delete('/:id', async (req, res) => {
    try {
        const policy = await Policy.findByIdAndDelete(req.params.id);
        if (!policy) return res.status(404).send('Policy not found');
        res.json({ message: 'Policy deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
