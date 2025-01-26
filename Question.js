const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    policyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy', required: true }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
