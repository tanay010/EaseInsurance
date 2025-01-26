document.getElementById('claimForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('processId', document.getElementById('processId').value);
    formData.append('incidentType', document.getElementById('incidentType').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('fileUpload', document.getElementById('fileUpload').files[0]);

    try {
        const response = await fetch('/api/claims', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            alert('Claim submitted successfully: ' + result.message);
            displayClaim(result.claim);
        } else {
            alert('Error submitting claim: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the claim.');
    }
});

document.getElementById('questionForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const questionData = {
        questionText: document.getElementById('questionText').value,
        policyId: document.getElementById('policyId').value,
        categoryId: document.getElementById('categoryId').value
    };

    try {
        const response = await fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Question added successfully: ' + result.message);
        } else {
            alert('Error adding question: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the question.');
    }
});

document.getElementById('policyForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const policyData = {
        policyName: document.getElementById('policyName').value,
        coverageDetails: document.getElementById('coverageDetails').value.split(',')
    };

    try {
        const response = await fetch('/api/policies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(policyData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Policy added successfully: ' + result.message);
        } else {
            alert('Error adding policy: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the policy.');
    }
});

document.getElementById('categoryForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const categoryData = {
        categoryName: document.getElementById('categoryName').value
    };

    try {
        const response = await fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoryData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Category added successfully: ' + result.message);
        } else {
            alert('Error adding category: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the category.');
    }
});

function displayClaim(claim) {
    const claimList = document.getElementById('claim-list');
    const claimItem = document.createElement('div');
    claimItem.innerHTML = `
        <h3>Process ID: ${claim.processId}</h3>
        <p>Status: Under Review</p>
        <p>Uploaded Document: <a href="${claim.filePath}" target="_blank">View Document</a></p>
    `;
    claimList.appendChild(claimItem);
}
