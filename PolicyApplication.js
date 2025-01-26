const mongoose = require('mongoose');

const policyApplicationSchema = new mongoose.Schema({
    policyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy', required: true },
    customerName: { type: String, required: true },
    applicationStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

const PolicyApplication = mongoose.model('PolicyApplication', policyApplicationSchema);

module.exports = PolicyApplication;
