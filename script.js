// Get the button element
const button = document.getElementById('actionButton');

// Add an event listener to the button
button.addEventListener('click', function () {
    // Change the button text when clicked
    button.textContent = "You clicked me!";

    // Change the button color
    button.style.backgroundColor = "#28a745";

    // After 2 seconds, reset everything back to normal
    setTimeout(function () {
        button.textContent = "Click Me!";
        button.style.backgroundColor = "#007BFF";
    }, 2000);
});
