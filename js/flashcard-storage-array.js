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
let privateSets = document.getElementById("private-sets");

// Display all the Sets
function displayAllSets(array) {
  createDisplay();
  for (let i = 0; i < array.length; i++) {
    for (let t = 0; t < array[i].set.length; t++) {
      createContainer(t, array[i].set[t].term, array[i].set[t].def);
    }
  }
}

// Helper Functions
function createDisplay() {
  // Create Elements to Display them in
  

  // Loop though all the Arrays

  // Set Array Variables as Elements
}

function createContainer(i, term, definition) {

}

// Helper Functions - Private
function findArraysWithUser(array) {
  let userSetsArray = [];
  // Loop through all of the Arrays
  for (let i = 0; i < array.length; i++) {
    // Find the right user;
    if (array[i].user === login) {
      userSetsArray.push(login);
    }
  }
  displayAllSets(userSetsArray);
}