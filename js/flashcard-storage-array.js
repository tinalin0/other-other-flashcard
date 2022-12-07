// Loading and Storing of Flashcards

// Public Sets of Flashcards
publicArray = loadDecks(publicArray);
// Name - Terms and Definitions

// Private Sets of Flashcards
privateArray = loadDeck(privateArray);
// Account, Name - Terms and Definitions

function displayAll() {
    
}

function saveDecks(array) {
    localStorage.setItem(`${array}`, JSON.stringify(array));
  }
  
  function loadDecks(array) {
    let arrayStr = localStorage.getItem(`${array}`);
    return JSON.parse(arrayStr) ?? [];
  }