// Add event listeners to the buttons
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);

// Function to handle login
function login() {
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a request to the backend to verify the credentials
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the protected page
            window.location.href = '/protected';
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => console.error(error));
}

// Function to handle registration
function register() {
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a request to the backend to create a new user
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the login page
            window.location.href = '/';
        } else {
            alert('Registration failed');
        }
    })
    .catch(error => console.error(error));
}
