// Display button to card 
// function createCard(){
// var wordCard = document.getElementById("create-word").value;
// var definitionCard= document.getElementById("create-definition").value;
// document.getElementById("word").innerHTML = wordCard;
// document.getElementById('definition').innerHTML = definitionCard;
// }
// Global variables:
var frontCard = document.getElementById("front-card-display");
var backCard = document.getElementById("back-card-display");
// 
var frontCardRemoved = document.getElementById("front-card-display-1");
var backCardRemoved = document.getElementById("back-card-display-1");
// 
var removedWord=[];
var word = document.getElementById('word');
var definition = document.getElementById('definition');
var flashCard1 = new flashCard("JavaScript", "ES6 Browser language");
var flashCard2 = new flashCard("Raymond","Front End Developer");
var flashCard3 = new flashCard("Boomer","Perfect Pitbull");
var myFlashCards = [flashCard1, flashCard2, flashCard3];
var flashCardIndex = 0;
var newWord, newDefinition;

function flashCard(word, definition){
    this.word = word;
    this.definition = definition;
}

word.innerHTML = flashCard1.word;
definition.innerHTML = flashCard1.definition;
backCard.style.visibility = "hidden";
// Adding new flash cards 

function addFlashCard(newWord, newDefinition){
    var newWord = document.getElementById("create-word");
    var newDefinition = document.getElementById("create-definition");
  
    function create(){
        var newFlashCard = new flashCard();
        newFlashCard.word = newWord.value;
        newFlashCard.definition = newDefinition.value;
        myFlashCards.push(newFlashCard);
        flashCardIndex = myFlashCards.length - 1;
        frontCard.innerHTML = myFlashCards[flashCardIndex].word;
        backCard.innerHTML = myFlashCards[flashCardIndex].definition; 
       
    }
      
    function resetPlaceholder() {
        document.getElementById("create-word").placeholder =
          "Add a new term";
        document.getElementById("create-definition").placeholder =
          "Add an new definition";
      }
    
    function resetForm() {
        document.getElementById("create-word").value = "";
        document.getElementById("create-definition").value = "";
        document.getElementById("create-card").reset();
      }
    create();
    resetForm();
    resetPlaceholder();
    console.log(flashCardIndex);
    console.log(myFlashCards); 

}
    // } else if (newWord.value == newDefinition.value) {
    //     alert("Please add a term to learn");
    //   } else if(
    //     (newWord.value == null || newWord.value == "", newDefinition.value == null ||
    //     newDefinition.value == "", newWord.value == null ||
    //     newDefinition.value == null ||
    //       newWord.value == "" ||
    //       newDefinition.value == "") ){
      
    //     alert("Fill out both sides of the card");
    //       }
    //       document.getElementById("create-word").focus();
    //     }
    


    
// Rotating Buttons for cards
function flipCard() {
    if (frontCard.style.visibility != "hidden") {
      frontCard.style.visibility = "hidden";
      backCard.style.visibility = "visible";
    } else {
      frontCard.style.visibility = "visible";
      backCard.style.visibility = "hidden";
    }
  }

  function previousCard() {
    if (flashCardIndex > 0)
      flashCardIndex = (flashCardIndex - 1);
    else if (flashCardIndex == 0) flashCardIndex = myFlashCards.length-1;
    frontCard.innerHTML = myFlashCards[flashCardIndex].word;
    backCard.innerHTML = myFlashCards[flashCardIndex].definition;
  console.log(flashCardIndex);
  console.log(myFlashCards);
  }

  function nextCard() {
    flashCardIndex = (flashCardIndex + 1) % myFlashCards.length;
    frontCard.innerHTML = myFlashCards[flashCardIndex].word;
    backCard.innerHTML = myFlashCards[flashCardIndex].definition;
    console.log(flashCardIndex);
    console.log(myFlashCards); 
}

  function displayBothCards(){
    frontCard.style.visibility = "visible";
    backCard.style.visibility = "visible";
    console.log(flashCardIndex);
    console.log(myFlashCards); 
  }

  function removeCard(){
//  myFlashCards.splice(myFlashCards.indexOf(flashCardIndex),1);
// for( var i = 0; i < myFlashCards.length; i++);
//     if ( i == myFlashCards[i]);{
//         console.log(i);
    // flashCardIndex.splice(flashCardIndex.indexOf(myFlashCards));
    // console.log(flashCardIndex);
    // console.log(myFlashCards); 
// myFlashCards.remove(flashCardIndex);
// var test = flashCardIndex;
// for( var i = 0; i < test; i++){ 
//   if ( myFlashCards[i] - 1 == test) {
//    myFlashCards.splice(i, 1); 
//   }
// // }
// var i = flashCardIndex;
// if( i = flashCardIndex){
// myFlashCards[flashCardIndex].splice(0,1);} else{ console.log( myFlashCards) }


for ( var i = 0; i <= flashCardIndex; i++ ){
  
  // 
  // 

   var removed2 = myFlashCards.splice(i,1);
    frontCard.innerHTML = myFlashCards[flashCardIndex].word;
    backCard.innerHTML = myFlashCards[flashCardIndex].definition;

    console.log(flashCardIndex);
    console.log(myFlashCards);
    console.log(removed2);

    } 
removedWord.push(removed2);
frontCard.innerHTML = myFlashCards[flashCardIndex].word;
backCard.innerHTML = myFlashCards[flashCardIndex].definition; 
console.log(removedWord);


}