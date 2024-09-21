// Add event listeners to the tab buttons
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginTab.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerTab.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Add event listeners to the form buttons
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if the email and password are correct
    if (email === 'example@example.com' && password === 'password') {
        // Redirect to the dashboard page
        window.location.href = 'https://example.com/dashboard'; // Replace with your redirect URL
    } else {
        alert('Invalid email or password');
    }
});

registerButton.addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Check if the email and password are correct
    if (email !== '' && password !== '' && password === confirmPassword) {
        // Redirect to the dashboard page
        window.location.href = 'https://example.com/dashboard'; // Replace with your redirect URL
    } else {
        alert('Invalid email or password');
    }
});
