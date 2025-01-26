const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policyName: { type: String, required: true },
    coverageDetails: [{ type: String }]
});

const Policy = mongoose.model('Policy', policySchema);
module.exports = Policy;
