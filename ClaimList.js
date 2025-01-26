// src/components/ClaimList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClaimList = () => {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        const fetchClaims = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/claims');
                setClaims(response.data);
            } catch (error) {
                console.error('Error fetching claims:', error);
            }
        };

        fetchClaims();
    }, []);

    return (
        <div>
            <h2>Claims List</h2>
            <ul>
                {claims.map(claim => (
                    <li key={claim.referenceNumber}>
                        <strong>Reference Number:</strong> {claim.referenceNumber} - <strong>Status:</strong> {claim.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClaimList;