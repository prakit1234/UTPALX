// Create loading GIF and countdown display
const loadingGif = document.getElementById('loading-gif');
const countdownDisplay = document.getElementById('countdown');

// Add event listeners to the buttons
document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    redirectWithCountdown('https://prakit1234.github.io/blox-fruit/'); // Update this URL
});

document.getElementById('register-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default button action
    redirectWithCountdown('https://prakit1234.github.io/blox-fruit/'); // Update this URL
});

// Function to handle redirect with countdown
function redirectWithCountdown(redirectUrl) {
    // Show the loading GIF and countdown
    loadingGif.style.display = 'block'; // Show the GIF
    countdownDisplay.style.display = 'block'; // Show the countdown

    let countdown = 10; // Countdown duration in seconds

    countdownDisplay.textContent = `Redirecting in ${countdown} seconds...`; // Initial message

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = `Redirecting in ${countdown} seconds...`;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            window.location.href = redirectUrl; // Redirect when countdown is finished
        }
    }, 1000); // Update every second
}
