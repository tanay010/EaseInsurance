const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Handle Sign Up Form Submission
document.querySelector('.sign-up-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector('.sign-up-form input[name="username"]').value;
    const password = document.querySelector('.sign-up-form input[name="password"]').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Removed email
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        window.location.href = data.redirect; // Redirect on success
    }
});

// Handle Sign In Form Submission
document.querySelector('.sign-in-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector('.sign-in-form input[name="username"]').value;
    const password = document.querySelector('.sign-in-form input[name="password"]').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        window.location.href = '/'; // Redirect on success
    }
});
