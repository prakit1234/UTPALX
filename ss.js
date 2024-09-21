// JavaScript
const getStartedButton = document.querySelector('.btn-get-started');
const viewExploitsButton = document.querySelector('.btn-view-exploits');
const domain = 'https://yourdomain.com'; // Replace with your domain

getStartedButton.addEventListener('click', () => {
  window.location.href = `${domain}/get-started`;
});

viewExploitsButton.addEventListener('click', () => {
  window.location.href = `${domain}/exploits`;
});
