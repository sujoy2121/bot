// Initialize the Telegram Web App API
const telegram = window.Telegram.WebApp;

// Display user information
document.getElementById('userId').textContent = telegram.initDataUnsafe.user.id || 'N/A';
document.getElementById('username').textContent = telegram.initDataUnsafe.user.username || 'N/A';
document.getElementById('firstName').textContent = telegram.initDataUnsafe.user.first_name || 'N/A';
document.getElementById('lastName').textContent = telegram.initDataUnsafe.user.last_name || 'N/A';

// Close the app when the button is clicked
document.getElementById('closeApp').addEventListener('click', () => {
    telegram.close();
});

// Optional: Show the main button (provided by Telegram) and set its text
telegram.MainButton.setText('Hello Telegram');
telegram.MainButton.show();
