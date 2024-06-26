function updateButtonColors(color) {
    const buttons = document.querySelectorAll('.nav-link, .zeplit-client-link, .settings-link, .logo a');
    const [r, g, b] = hexToRgb(color);
    const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

    for (let button of buttons) {
        button.style.color = brightness > 125 ? '#000' : '#fff';
        button.style.backgroundColor = color;
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
    }
}

window.addEventListener('load', applyNavbarColor);
