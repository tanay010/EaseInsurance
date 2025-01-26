// src/components/ClaimForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ClaimForm = () => {
    const [policyId, setPolicyId] = useState('');
    const [incidentType, setIncidentType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [documents, setDocuments] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('policyId', policyId);
        formData.append('incidentType', incidentType);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('dateTime', dateTime);
        for (let i = 0; i < documents.length; i++) {
            formData.append('documents', documents[i]);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/claims', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Claim submitted:', response.data);
        } catch (error) {
            console.error('Error submitting claim:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Policy ID" value={policyId} onChange={(e) => setPolicyId(e.target.value)} required />
            <input type="text" placeholder="Incident Type" value={incidentType} onChange={(e) => setIncidentType(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
            <input type="file" multiple onChange={(e) => setDocuments(e.target.files)} required />
            <button type="submit">Submit Claim</button>
        </form>
    );
};

export default ClaimForm;