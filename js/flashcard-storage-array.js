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


// Display all the public Sets
function displayAllPub(array) {
  for (let i = 0; i < array.length; i++) {

  }
}

// Helper Functions
// Loop though all the Arrays

// Create Elements to Display them in


// Display Private Sets of the User


// Helper Functions
// Loop through all of the Arrays

// Find the One with the right User

// Create element to display it in
