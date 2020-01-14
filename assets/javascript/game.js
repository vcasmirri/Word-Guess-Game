var winCounter = 0;
var guessCounter = 0;
var word_1 = "dragon";
var currentWord = document.getElementById("currentWord");
var guessedLetters = [];

if (winCounter === 0) {
    wordChallenge = word_1;
    console.log("The current word is " + wordChallenge + ".");
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var userGuess = event.key;
    if (guessedLetters.includes(userGuess) === false) {
    if (userGuess) {
        guessedLetters.push(String(userGuess));
        console.log(userGuess);
        console.log(guessedLetters);
        }
    }
}

for (var i = 0; i < wordChallenge.length; i++) {
    if (guessedLetters.includes(wordChallenge[i])) {
        currentWord.innerHTML = wordChallenge[i];
    }
        else {
            currentWord.innerHTML = "_";
        }
}

// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     if ((userGuess === wordChallenge.slice(0, 1)) || (userGuess === wordChallenge.slice(1, 2)) || (userGuess === wordChallenge.slice(2, 3)) || (userGuess === wordChallenge.slice(3, 4)) || (userGuess === wordChallenge.slice(4, 5)) || (userGuess === wordChallenge.slice(5, 6)) || (userGuess === wordChallenge.slice(6, 7))) {
//         console.log("You guessed: " + userGuess);
//         console.log("You guessed right.")
//     }

