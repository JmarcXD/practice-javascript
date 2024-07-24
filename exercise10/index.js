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

    drawHangman(numberHP);

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

const canvas = document.getElementById('hangman');
const ctx = canvas.getContext('2d');

function drawGallows() {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(300, 350);
    ctx.moveTo(150, 350);
    ctx.lineTo(150, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(250, 100);
    ctx.stroke();
}

function drawHead() {
    ctx.beginPath();
    ctx.arc(250, 130, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function drawBody() {
    ctx.beginPath();
    ctx.moveTo(250, 160);
    ctx.lineTo(250, 250);
    ctx.stroke();
}

function drawLeftArm() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(210, 220);
    ctx.stroke();
}

function drawRightArm() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(290, 220);
    ctx.stroke();
}

function drawLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(210, 300);
    ctx.stroke();
}

function drawRightLeg() {
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(290, 300);
    ctx.stroke();
}

function drawHangman(lives) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(lives);
    if (lives < 7) drawGallows();
    if (lives < 6) drawHead();
    if (lives < 5) drawBody();
    if (lives < 4) drawLeftArm();
    if (lives < 3) drawRightArm();
    if (lives < 2) drawLeftLeg();
    if (lives < 1) drawRightLeg();
}

