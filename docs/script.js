// Create loading GIF
const loadingImage = document.createElement('img');
loadingImage.src = 'https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif'; // Replace with your GIF path
loadingImage.alt = 'Loading';
loadingImage.style.display = 'none'; // Initially hidden
document.body.appendChild(loadingImage);

// Create countdown display
const countdownDisplay = document.createElement('p');
countdownDisplay.style.display = 'none'; // Initially hidden
document.body.appendChild(countdownDisplay);

// Add event listeners to the buttons
document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    redirectWithCountdown('http://127.0.0.1:5500/MAIN/login.html');
});

document.getElementById('register-btn').addEventListener('click', () => {
    redirectWithCountdown('http://127.0.0.1:5500/MAIN/register.html');
});

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
