function hideElementById(selectId) {
  const hideElement = document.getElementById(selectId);
  hideElement.classList.add("hidden");
}

function showElementById(addId) {
  const showElement = document.getElementById(addId);
  showElement.classList.remove("hidden");
}

function getTandomAlphabets() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  // console.log(alphabets)

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index)

  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removebackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
 
// function getTextElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementText=element.innerText;
//     const value= parseInt(elementText);
//     return value;
// }
// function setElementValueById(elementId, value){
//     const element= document.getElementById(elementId);
//      element.innerText = value;
// }