// Global Variables
let login = false;

// Global Arrays
let users = loadUsers();

// Sign in and Sign up Variables

// Div
let signInDiv = document.getElementById("login-div");
let signUpDiv = document.getElementById("sign-up-div");

// Links to switch
let signInLink = document.getElementById("sign-in-link");
let signUpLink = document.getElementById("sign-up-link");

// Buttons
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// Event Listeners

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

// Switch Logins
signUpLink.addEventListener("click", displaySignUp);

signInLink.addEventListener("click", displaySignIn);


// Switch Flashcard and Home 

// Home Variables
let homeDiv = document.getElementById("home-div");
let homeBtn = document.getElementsByClassName("home-btn");

// Flashcard Variables
let flashcardsDiv = document.getElementById("flashcards-div");
let flashcardsBtn = document.getElementsByClassName("flashcards-btn");

// Event Listeners
for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", displayHomeDiv);
}

for (let i = 0; i < flashcardsBtn.length; i++) {
    flashcardsBtn[i].addEventListener("click", displayFlashDiv);
}

// Swtich to Creating Cards

// Display Create Div
let createDiv = document.getElementById("create-flashcards-div");
let createDivBtn = document.getElementById("create-btn");

createDivBtn.addEventListener("click", displayCreateDiv);

// Create new Card
let newCardBtn = document.getElementById("add-card-btn");
newCardBtn.addEventListener("click", addNewCard);


let createDeckBtn = document.getElementById("create-deck-btn");
// Creating Deck
createDeckBtn.addEventListener("click", displayHomeDiv);
createDeckBtn.addEventListener("click", createDeck);

// Get Private or Public and Clearing
let displayValMenu = document.getElementById("displayVal-menu");
createDeckBtn.addEventListener("click", displayValHandler);