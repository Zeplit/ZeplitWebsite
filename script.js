// script.js

// Function to update button text and background color based on color brightness
function updateButtonColors(color) {
    const buttons = document.querySelectorAll('.nav-link, .zeplit-client-link, .settings-link, .logo a');
    const [r, g, b] = hexToRgb(color);
    const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

    for (let button of buttons) {
        button.style.color = brightness > 125 ? '#000' : '#fff'; // Set text color based on brightness
        button.style.backgroundColor = color; // Set background color
    }
}

// Function to convert hex color to RGB values
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

// Function to apply navbar color
function applyNavbarColor() {
    const savedColor = localStorage.getItem('navbarColor');
    if (savedColor) {
        document.querySelector('.banner').style.backgroundColor = savedColor;
        updateButtonColors(savedColor);
        console.log('Navbar color applied from localStorage:', savedColor);
    } else {
        console.log('No saved color found in localStorage');
    }
}

// Function to handle color picker change event
document.getElementById('navbar-color-picker').addEventListener('input', function() {
    const color = this.value;
    console.log('Color changed:', color);
    document.querySelector('.banner').style.backgroundColor = color;
    updateButtonColors(color);
    localStorage.setItem('navbarColor', color); // Save color to localStorage
    console.log('Color saved to localStorage:', color);
});

// Function to handle default color button click event
document.getElementById('default-color-button').addEventListener('click', function() {
    const defaultColor = '#007bff'; // Default color (blue)
    console.log('Default color clicked');
    document.querySelector('.banner').style.backgroundColor = defaultColor;
    updateButtonColors(defaultColor);
    localStorage.setItem('navbarColor', defaultColor); // Save default color to localStorage
    console.log('Default color saved to localStorage:', defaultColor);
});

// Apply navbar color when the page loads
window.addEventListener('load', applyNavbarColor);
