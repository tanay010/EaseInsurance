const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
    processId: { type: String, required: true },
    incidentType: { type: String, required: true },
    description: { type: String, required: true },
    profilePhoto: { type: String }, // New field for profile photo
    createdAt: { type: Date, default: Date.now }
});

const Claim = mongoose.model('Claim', claimSchema);
module.exports = Claim;
