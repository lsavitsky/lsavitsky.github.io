/**
 * === Dropdown toggle functionality ===
 * Allows for the use of a drop down menu clicking on options for nav
 */
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  // Toggle dropdown on button click
  dropdownToggle.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from bubbling up
    dropdown.classList.toggle('open'); // Add or remove "open" class
    dropdownMenu.classList.toggle('show'); // Show or hide the dropdown menu
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function () {
    dropdown.classList.remove('open'); // Ensure arrow points down
    dropdownMenu.classList.remove('show'); // Hide the dropdown menu
  });
});

/**
 * === Back to Top Button ===
 * Displays a "Back to Top" button when the user scrolls down a certain amount,
 * and scrolls smoothly to the top when clicked.
 */
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block'; // Show the button
    } else {
        backToTopButton.style.display = 'none'; // Hide the button
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling effect
    });
});

/**
 * === Dynamic Scrollbar Gradient ===
 * Adjusts the scrollbar track's gradient dynamically based on scroll position.
 */
const updateScrollbarGradient = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scrollable height

    // Calculate the scroll percentage (0 to 1)
    const scrollPercent = scrollPosition / maxScroll;

    // Define light and dark colors for the gradient
    const lightColor = 231; // Light gray (e7 in RGB)
    const darkColor = 0; // Black (00 in RGB)

    // Interpolate the color value based on scroll percentage
    const newColorValue = Math.round(lightColor - (lightColor - darkColor) * scrollPercent);

    // Convert the new color to an RGB format
    const newColorHex = `rgb(${newColorValue}, ${newColorValue}, ${newColorValue})`;

    // Update the CSS variable for the scrollbar gradient
    document.documentElement.style.setProperty('--scroll-gradient-color', newColorHex);
};

// Add an event listener for scrolling to update the gradient
window.addEventListener('scroll', updateScrollbarGradient);

// Initialize the gradient on page load
window.addEventListener('DOMContentLoaded', updateScrollbarGradient);




// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and hidden text elements
  const button = document.getElementById('magic-button');
  const hiddenText = document.getElementById('hidden-text');

  // Add a click event listener to the button
  button.addEventListener('click', function () {
    // Toggle the display of the hidden text
    if (hiddenText.style.display === 'none') {
      hiddenText.style.display = 'block'; // Show the text
    } else {
      hiddenText.style.display = 'none'; // Hide the text
    }
  });
});
