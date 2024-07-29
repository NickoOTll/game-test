// Function to generate a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game
function playGame() {
    // Roll two dice
    const die1 = rollDie();
    const die2 = rollDie();

    // Calculate the sum of the dice
    const sum = die1 + die2;

    // Get the result div to display the output
    const resultDiv = document.getElementById('result');

    // Output the values of the dice
    resultDiv.innerHTML = `<p>Die 1: ${die1}</p><p>Die 2: ${die2}</p><p>Sum: ${sum}</p>`;

    // Determine the outcome of the game
    if (sum === 7 || sum === 11) {
        resultDiv.innerHTML += '<p>CRAPS – you lose!</p>';
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultDiv.innerHTML += '<p>You won!</p>';
    } else {
        resultDiv.innerHTML += '<p>You pushed!</p>';
    }
}
