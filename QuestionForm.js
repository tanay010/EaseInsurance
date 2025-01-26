import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
    const [questionText, setQuestionText] = useState('');
    const [policyId, setPolicyId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/questions', { questionText, policyId });
            alert(response.data.message);
            setQuestionText('');
            setPolicyId('');
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Error submitting question: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Add Question</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="questionText">Question:</label>
                <input
                    type="text"
                    id="questionText"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    required
                />
                <label htmlFor="policyId">Policy ID:</label>
                <input
                    type="text"
                    id="policyId"
                    value={policyId}
                    onChange={(e) => setPolicyId(e.target.value)}
                    required
                />
                <button type="submit">Add Question</button>
            </form>
        </div>
    );
};

export default QuestionForm;
