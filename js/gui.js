function displaySignUp() {
    signUpDiv.style.display = "block";
    signInDiv.style.display = "none";
    homeDiv.style.display = "none";
    flashcardsDiv.style.display = "none";
    createDiv.style.display = "none";
}

function displaySignIn() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "block";
    homeDiv.style.display = "none";
    flashcardsDiv.style.display = "none";
    createDiv.style.display = "none";
}

function displayHomeDiv() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "none";
    homeDiv.style.display = "block";
    flashcardsDiv.style.display = "none";
    createDiv.style.display = "none";
}

function displayFlashDiv() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "none";    homeDiv.style.display = "none";
    flashcardsDiv.style.display = "block";
    createDiv.style.display = "none";
}

function displayCreateDiv() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "none";    homeDiv.style.display = "none";
    flashcardsDiv.style.display = "none";
    createDiv.style.display = "block";
}