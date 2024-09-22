// Create HTML elements dynamically
const body = document.body;

// Create loading GIF
const loadingImage = document.createElement('img');
loadingImage.src = 'https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif'; // Replace with your GIF path
loadingImage.alt = 'Loading';
loadingImage.style.display = 'none'; // Initially hidden
body.appendChild(loadingImage);

// Create countdown display
const countdownDisplay = document.createElement('p');
countdownDisplay.style.display = 'none'; // Initially hidden
body.appendChild(countdownDisplay);

// Create buttons
const loginButton = document.createElement('button');
loginButton.textContent = 'Login';
const registerButton = document.createElement('button');
registerButton.textContent = 'Register';

body.appendChild(loginButton);
body.appendChild(registerButton);

// Add event listeners to the buttons
loginButton.addEventListener('click', () => redirectWithCountdown('http://127.0.0.1:5500/MAIN/index.html'));
registerButton.addEventListener('click', () => redirectWithCountdown('http://127.0.0.1:5500/MAIN/index.html'));

// Function to handle redirect with countdown
function redirectWithCountdown(redirectUrl) {
    // Show the loading GIF and countdown
    loadingImage.style.display = 'block'; // Show the GIF
    countdownDisplay.style.display = 'block'; // Show the countdown

    let countdown = 10; // Countdown duration in seconds

    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = `Redirecting in ${countdown} seconds...`;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            window.location.href = redirectUrl; // Redirect when countdown is finished
        }
    }, 1000); // Update every second
}
