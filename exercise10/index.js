var words = ["ABANICOS", "ALBERGUES", "ALEGRIAS", "AMISTOSA", "ATIPICAS"];
var numberHP = 7;
var letterUsedList = [];
var numberOfLetterGuessed = 0;

let randomWord = Math.floor(Math.random() * (words.length - 1 + 1));
var wordToGuess = words[randomWord];

function verifyLetter() {
    let letterInput = document.getElementById("letter").value;

    if (numberHP > 0) {
        var letterFound = findLetterTest(letterInput); // Get letter input

        // Verify if the letter exists
        if (!letterFound && !letterUsedList.includes(letterInput)) {
            numberHP--;
            document.getElementById("numberOfTry").innerHTML = numberHP;
        }
    }


    if (numberHP == 0) // If he has 0 hp, loose the game
        document.getElementById("message").innerHTML = "HAS PERDIDO LA PALABRA ERA " + wordToGuess;
    else if (numberOfLetterGuessed == 8) // If guessed the word, display de message
        document.getElementById("message").innerHTML = "ENHORABUENA HAS ADIVINADO LA PALBRA";
    else if (!letterUsedList.includes(letterInput)) // If the letter doesn't exist, add the letter in the array and display
        displayLetterUsed(letterInput);

}

function findLetterTest(letter) {
    var letterFound = false;

    for (let i = 0; i < wordToGuess.length; i++) {
        console.log(letter.toLowerCase() == wordToGuess[i].toLowerCase());
        if (letter.toLowerCase() == wordToGuess[i].toLowerCase()) {
            document.getElementById("letter-" + i).innerHTML = wordToGuess[i];
            letterFound = true;
            numberOfLetterGuessed++;
        }
    }

    return letterFound;
}

function displayLetterUsed(letter) { 
    letterUsedList.push(letter); // Add in the array
    let displayLetterUsed = document.getElementById("letterUsed");

    displayLetterUsed.innerHTML = "";
    letterUsedList.forEach(lu => {
        displayLetterUsed.innerHTML += " ," + lu;
    });
}