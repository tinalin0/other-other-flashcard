// Switch between sign in and login
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

// Swtich between Home and Flashcard
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

// Display Creation of Sets Div
function displayCreateDiv() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "none";    homeDiv.style.display = "none";
    flashcardsDiv.style.display = "none";
    createDiv.style.display = "block";
}

// Display The 3 Sets of the User - Private
function display3Sets() {

}

// Display all the sets of the user
function displayAllPrivateSets() {
    
}