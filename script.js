$(document).ready(function () {
    // Dice Roll Function
    $('#rollButton').click(function () {
        // Get the selected dice type (d4, d6, d20, etc.)
        const diceSides = $('#diceSelect').val();

        // Generate a random roll between 1 and the number of sides of the dice
        const roll = Math.floor(Math.random() * diceSides) + 1;

        // Debugging: Log the roll to the console
        console.log(`Rolled a d${diceSides}: ${roll}`);

        // Display the result in the result div
        $('#result').text(`You rolled a d${diceSides}: ${roll}`).fadeIn(); // Make sure to show it
    });

    // Header Background Color Animation (Rainbow effect)
    function animateHeader() {
        $('header').animate({ backgroundColor: 'rgb(255, 0, 0)' }, 1000)
            .animate({ backgroundColor: 'rgb(255, 127, 0)' }, 1000)
            .animate({ backgroundColor: 'rgb(255, 255, 0)' }, 1000)
            .animate({ backgroundColor: 'rgb(0, 255, 0)' }, 1000)
            .animate({ backgroundColor: 'rgb(0, 0, 255)' }, 1000)
            .animate({ backgroundColor: 'rgb(75, 0, 130)' }, 1000)
            .animate({ backgroundColor: 'rgb(238, 130, 238)' }, 1000, animateHeader); // Loop the animation
    }

    animateHeader();  // Start the animation when the page loads
});
