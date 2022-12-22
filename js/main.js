// Global Variables
let login = 0;

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

// Login Gui Event Listeners

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

createDivBtn.addEventListener("click",displayCreateDiv);

// Create new Card
let newCardBtn = document.getElementById("add-card-btn");
newCardBtn.addEventListener("click", addNewCard);

// Creating Deck
let createDeckBtn = document.getElementById("create-deck-btn");
createDeckBtn.addEventListener("click", displayHomeDiv);
createDeckBtn.addEventListener("click", createDeck);

// Get Private or Public and Clearing
let displayValMenu = document.getElementById("displayVal-menu");
let titleVal = document.getElementById("title-text");
createDeckBtn.addEventListener("click", displayValHandler);

// Loading and Storing of Flashcards
// Public Sets of Flashcards
let publicArray = loadDecksPub();

// Private Sets of Flashcards
let privateArray = loadDecksPriv();

// Priv of User
let userSetsArray = [];

// Private Set Displays
let privateDiv = document.getElementById("private-sets");

// Display 3 Private Sets of User
let chooseBtn = document.getElementById("choose-btn");
chooseBtn.addEventListener("click", display3Sets(userSetsArray, 3));

// Display All Private Sets of User
let allPrivBtn = document.getElementById("see-all-priv-btn");
let allPrivSets = document.getElementById("all-private-sets")
allPrivBtn.addEventListener("click", displayAllSets(userSetsArray, "all-sets"));

// Public Set Displays
let publicDiv = document.getElementById("public-sets");

// Onload display 3 public
document.addEventListener("load", display3Sets(publicArray, publicDiv));

// On click display all public
let allPubBtn = document.getElementById("see-all-pub-btn");
let allPubSets = document.getElementById("all-public-sets");
allPubBtn.addEventListener("click", displayAllSets(publicArray, allPubSets));


// Display Sets Clicked
