// Add some basic JavaScript functionality to the buttons
document.addEventListener("DOMContentLoaded", function() {
  const getStartedButton = document.getElementById("get-started");
  const getExploitsButton = document.getElementById("get-exploits");

  getStartedButton.addEventListener("click", function() {
    window.location.href = "https://example.com/get-started"; // Redirect to a URL when Get Started button is clicked
  });

  getExploitsButton.addEventListener("click", function() {
    window.location.href = "https://example.com/get-exploits"; // Redirect to a URL when Get Exploits button is clicked
  });
});
