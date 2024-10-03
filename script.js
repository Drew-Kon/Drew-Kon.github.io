$(document).ready(function () {
    $('#rollButton').click(function () {
        const diceSides = $('#diceSelect').val();

        // Проверка, выбран ли тип кубика
        if (!diceSides) {
            $('#result').text('Please select a valid dice type.').fadeIn();
            return;
        }

        // Генерация случайного числа от 1 до количества сторон кубика
        const roll = Math.floor(Math.random() * diceSides) + 1;

        // Отображение результата
        $('#result').text(`You rolled a d${diceSides}: ${roll}`).fadeIn();
    });
});
