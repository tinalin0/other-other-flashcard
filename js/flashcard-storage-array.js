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