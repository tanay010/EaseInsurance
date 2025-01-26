<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insurance Claim Processing</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <div class="sidebar">
        <nav>
            <img src="../img/profile_icon.png" alt="Profile" class="profile-photo" style="display: block; margin: 0 auto;" />
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="claim-process.html">Claim</a></li>
                <li><a href="question.html">Question</a></li>
                <li><a href="status.html">Status</a></li>
            </ul>
        </nav>
    </div>
    <div class="app-container">
        <h1>Insurance Claim Processing</h1>
        <div id="claimFormContainer">
            <h2>Submit a Claim</h2>
            <form id="claimForm">
                <label for="processId">Process ID:</label>
                <input type="text" id="processId" name="processId" required>
                
                <label for="incidentType">Incident Type:</label>
                <input type="text" id="incidentType" name="incidentType" required>
                
                <label for="description">Description:</label>
                <textarea id="description" name="description" required></textarea>
                
                <label for="fileUpload">Upload Document:</label>
                <input type="file" id="fileUpload" name="fileUpload" required>
                
                <button type="submit">Submit</button>
            </form>
        </div>
        <div id="claimListContainer">
            <h2>Claim List</h2>
            <div id="claim-list"></div>
        </div>
    </div>
    <script>
        document.getElementById('claimForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            try {
                const response = await fetch('/api/claims', {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();
                alert(result.message);
            } catch (error) {
                console.error('Error submitting claim:', error);
                alert('Error submitting claim: ' + error.message);
            }
        });
    </script>
</body>
</html>
