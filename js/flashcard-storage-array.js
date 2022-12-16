function saveDecksPub() {
  localStorage.setItem("publicArray", JSON.stringify(publicArray))
}
  
function loadDecksPub() {
  let publicStr = localStorage.getItem('publicArray');
  return JSON.parse(publicStr) ?? [];
}

function saveDecksPriv() {
  localStorage.setItem("privateArray", JSON.stringify(privateArray))
}
  
function loadDecksPriv() {
  let privateStr = localStorage.getItem('privateArray');
  return JSON.parse(privateStr) ?? [];
}

// Variables
let publicDiv = document.getElementById("public-sets");
let privateDiv = document.getElementById("private-sets");

// Display 3 Sets
function display3Sets() {
  
}

// Display all the Sets
function displayAllSets(array, where) {
  for (let i = 0; i < array.length; i++) {
    createDisplay(i, array[i].user, array[i].title, where);
  }
}

// Helper Functions - Private
function displayPrivateSets(array) {
  let userSetsArray = [];
  // Loop through all of the Arrays
  for (let i = 0; i < array.length; i++) {
    // Find the right user;
    if (array[i].user === login) {
      userSetsArray.push(login);
    }
  }
  displayAllSets(userSetsArray, "private");
}

// Helper Functions
function createDisplay(i, user, title, where) {
  // Create Elements to Display them in
  let newDiv = document.createElement("div");
  let newTitle = document.creatElement("p");
  let newUser = document.createElement("p")

  // Append Elements
  if (where === "private"){
    newDiv.appendElement(publicDiv);
  } else {
    newDiv.appendElement(privateDiv);
  }

  newDiv.appendElement(newTitle);
  newDiv.appendElement(newUser);

  // Set IDS
  newDiv.id = "array" + i;

  // Set Array Variables as Elements
  newTitle.innerHTML = title;
  newUser.innerHTML = user;
}


// Display Flashcards of Set Clicked
function displayAllFlash(array, i) {
  for (let t = 0; t < array[i].set.length; t++) {
    createFlashDisplay(t, array[i].set[t].term, array[i].set[t].def);
  }
}

function createFlashDisplay(div, i, term, definition) {
  // Create Element
  let newCardDiv = document.createElement("div");
  let newTermDiv = document.createElement("div");
  let termContainer = document.createElement("p");
  let newDefDiv = document.createElement("div");
  let defContainer = document.createElement("p");

  let termBtn = document.createEleemnt("BUTTON");
  let defBtn = document.createElement("BUTTON")

  // Append Elements
  div.appendElement(newCardDiv);  

  newCardDiv.appendElement(newTermDiv);
  newCardDiv.appendElement(newDefDiv);

  newTermDiv.appendChild(termContainer);
  newDefDiv.appendChild(defContainer);

  newTermDiv.appendChild(termBtn);
  newDefDiv.appendChild(defBtn);

  // Set IDS
  newCardDiv.id = "card" + i;
  termBtn.id = "termBtn-" + i
  defBtn.id = "defBtn-" + i
  
  // Set Array Variables as Elements
  termContainer.innerHTML = term;
  defContainer.innerHTML = def;

}