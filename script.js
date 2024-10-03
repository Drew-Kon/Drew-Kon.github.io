// Get the elements from the DOM
const rollButton = document.getElementById('rollButton');
const diceSelect = document.getElementById('diceSelect');
const resultDiv = document.getElementById('result');

// Function to roll the selected dice
function rollDice() {
    // Get the selected dice type (e.g., d4, d20)
    const diceSides = parseInt(diceSelect.value);

    // Generate a random number between 1 and the number of sides on the selected die
    const roll = Math.floor(Math.random() * diceSides) + 1;

    // Display the result
    resultDiv.textContent = `You rolled a d${diceSides}: ${roll}`;
}

// Add event listener to the button
rollButton.addEventListener('click', rollDice);
