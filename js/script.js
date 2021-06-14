const low = 1;
const high = 10;
const randomValue = Math.floor(Math.random() * (high - low + 1) + low);
let chances = 3;
const input = document.querySelector("input");
const guessButton = document.querySelector("#guess-button");
const noOfChances = document.querySelector("#number_of_chances");
const alert = document.querySelector("#alert");
const restartButton = document.querySelector(".d-none");

guessButton.addEventListener("click", validateGuess);
restartButton.addEventListener("click", restartGame);

function validateGuess(e) {
    if (input.value === "") {
        createAlert("alert-info", "Enter a number");
    } else if (input.value < 1 || input.value > 10) {
        createAlert("alert-info", "The number is between 1 and 10");
    } else {
        if (chances > 0) {
            if (randomValue > input.value) {
                createAlert("alert-info", "Correct answer is greater");
                chances--;
                noOfChances.textContent = chances;
            } else if (randomValue < input.value) {
                createAlert("alert-info", "Correct answer is smaller");
                chances--;
                noOfChances.textContent = chances;
            } else {
                createAlert("alert-success", "You win");
                input.disabled = true;
                guessButton.disabled = true;
                restartButton.classList.remove("d-none");
            }
        }
    
        if (chances === 0) {
            createAlert("alert-danger", "You lose");
            input.disabled = true;
            guessButton.disabled = true;
            restartButton.classList.remove("d-none");
        }
    }
}

function createAlert(className, text) {
    alert.innerHTML = `
    <div class="alert ${className}" role="alert">
        ${text}!
    </div>`;
}

function restartGame(e) {
    window.location.reload();
}