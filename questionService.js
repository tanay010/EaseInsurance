const express = require('express');
const Question = require('../models/Question');
const router = express.Router();

// Create a new question
router.post('/', async (req, res) => {
    const { questionText, policyId, categoryId } = req.body;

    const newQuestion = new Question({
        questionText,
        policyId,
        categoryId
    });

    try {
        await newQuestion.save();
        res.status(201).json({ message: 'Question created successfully!', question: newQuestion });
    } catch (error) {
        res.status(500).json({ message: 'Error creating question: ' + error.message });
    }
});

// Retrieve all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions: ' + error.message });
    }
});

module.exports = router;
