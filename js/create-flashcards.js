let cardDiv = document.getElementById("new-cards");
let divArray = [];

function addNewCard() {
    // update divArray
    createNewEl(divArray.length);
    divArray.push(updateDiv(divArray.length, elValue(divArray.length, "term"), elValue(divArray.length, "def")));
}

// Helper Functions for Adding Cards
function createNewEl(i) {
    let newDiv = document.createElement("div");
    newDiv.id = "card-" + i;

    let termInput = document.createElement("INPUT");
    termInput.id = "term-" + i;
    termInput.setAttribute("type", "text");
    termInput.setAttribute("placeholder", "Term " + i)

    let defInput = document.createElement("INPUT");
    defInput.id = "def-" + i;
    defInput.setAttribute("type", "text");
    defInput.setAttribute("placeholder", "Definition")

    createNewCard(newDiv, termInput, defInput)
}

function createNewCard(div, term, def) {
    cardDiv.appendChild(div);
    div.appendChild(term);
    div.appendChild(def);
}

function elValue(i, element) {
    let elValue = document.getElementById(`${element}-${i}`);
    return elValue.value;
}

function updateDiv(i, term, def) {
    return {
        place: i,
        term: term,
        def: def,
    };
}

function createDeck() {

    cardDiv.innerHTML = "";
}

// Helper Functions for Creating New Decks
