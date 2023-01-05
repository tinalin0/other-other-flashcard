// Private of the User
function searchPriv() {
  // Loop through all of the Arrays
  for (let i = 0; i < privateArray.length; i++) {
    // Find the right user;
    if (privateArray[i].user === login) {
      userSetsArray.push(privateArray[i]);
    }
  }
}

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

// Display 3 Sets
function display3Sets(array, where) {
  if (array.length = 1) {
    let i = 0;
    createDisplay(i, array[i].user, array[i].title, where);
  } else if (array.length = 2) {
    for (let i = 0; i < 2; i++) {
      createDisplay(i, array[i].user, array[i].title, where);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      createDisplay(i, array[i].user, array[i].title, where);
    }
  }
}

// Display all the Sets
function displayAllSets(array, where) {
  for (let i = 0; i < array.length; i++) {
    let divBtnEl = createDisplay(i, array[i].user, array[i].title, where);

    // Detect if Div has been clicked
    // Display flashcards if it has
    divBtnEl.addEventListener("click",() => 
      displayAllFlash(array, i)
    );
  }
}

// Helper Functions
function createDisplay(i, user, title, where) {
  // Create Elements to Display them in
  let newDivBtn = document.createElement("BUTTON");
  let newTitle = document.createElement("p");
  let newUser = document.createElement("p")
  
  // Set IDS
  newDivBtn.id = "array" + i;

  // Set Array Variables as Elements
  newTitle.innerHTML = title;
  newUser.innerHTML = user;

  // Append Elements
  where.appendChild(newDiv);

  newDiv.appendChild(newTitle);
  newDiv.appendChild(newUser);

  return newDivBtn;
}


// Display Flashcards of Set Clicked
function displayAllFlash(array, i) {
  for (let t = 0; t < array[i].set.length; t++) {
    createFlashDisplay(t, array[i].set[t].term, array[i].set[t].def);
  }
}

function createFlashDisplay(i, term, definition) {
  // Create Element
  let newCardDiv = document.createElement("div");
  let newTermDiv = document.createElement("div");
  let termContainer = document.createElement("p");
  let newDefDiv = document.createElement("div");
  let defContainer = document.createElement("p");

  let termBtn = document.createEleemnt("BUTTON");
  let defBtn = document.createElement("BUTTON")

  // Append Elements
  div.appendChild(newCardDiv);  

  newCardDiv.appendChild(newTermDiv);
  newCardDiv.appendChild(newDefDiv);

  newTermDiv.appendChild(termContainer);
  newDefDiv.appendChild(defContainer);

  newTermDiv.appendChild(termBtn);
  newDefDiv.appendChild(defBtn);

  // Set IDS
  newCardDiv.id = "card-" + i;
  termBtn.id = "termBtn-" + i
  defBtn.id = "defBtn-" + i
  
  // Set Array Variables as Elements
  termContainer.innerHTML = term;
  defContainer.innerHTML = definition;
}