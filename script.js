$(document).ready(function () {
    // Dice Roll Function
    $('#rollButton').click(function () {
        // Get the selected dice type (d4, d6, d20, etc.)
        const diceSides = $('#diceSelect').val();

        // Проверка на случай, если тип кубика не выбран
        if (!diceSides) {
            $('#result').text('Please select a valid dice type.').fadeIn();
            return;
        }

        // Генерация случайного броска
        const roll = Math.floor(Math.random() * diceSides) + 1;

        // Отображение результата
        $('#result').text(`You rolled a d${diceSides}: ${roll}`).fadeIn();
    });
});
