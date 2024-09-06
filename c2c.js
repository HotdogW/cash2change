let input
const cleaner = 1000;

document.getElementById('button1').onclick = function () {

    //clear coloumns
    document.getElementById('quarter count').innerHTML = '';
    document.getElementById('dime count').innerHTML = '';
    document.getElementById('nickel count').innerHTML = '';
    document.getElementById('penny count').innerHTML = '';
    document.getElementById('quarter label').innerHTML = '';
    document.getElementById('dime label').innerHTML = '';
    document.getElementById('nickel label').innerHTML = '';
    document.getElementById('penny label').innerHTML = '';

    //takes user inout
    input = document.getElementById('textbox1').value;

    //checks if input is a number
    input = parseFloat(input);
    if (!isNaN(input)) {
        checkChange();
    }
    //error message if not number
    else {
        document.getElementById('quarter count').innerHTML = 'Error'
        document.getElementById('dime count').innerHTML = 'Type a Number'
    }
}

function checkChange() {
    //gives quarters
    while (input >= .25) {
        document.getElementById('quarter label').innerHTML = 'quarters';
        document.getElementById('quarter count').innerHTML++;
        input = input - .25;
        input = Math.ceil(input * cleaner) / cleaner;
    }

    //gives dimes
    while (input >= .10) {
        document.getElementById('dime label').innerHTML = 'dimes'
        document.getElementById('dime count').innerHTML++;
        input = input - .10;
        input = Math.ceil(input * cleaner) / cleaner;
    }


    //gives nickels
    while (input >= .05) {
        document.getElementById('nickel label').innerHTML = 'nickels'
        document.getElementById('nickel count').innerHTML++;
        input = input - .05;
        input = Math.ceil(input * cleaner) / cleaner;
    }

    //gives pennies
    while (input >= .01) {
        document.getElementById('penny label').innerHTML = 'pennies'
        document.getElementById('penny count').innerHTML++;
        input = input - .01;
        input = Math.ceil(input * cleaner) / cleaner;
    }
}