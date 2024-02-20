

// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

function handleKeybordButtonPress(event){
    const playerPressed= event.key;
    console.log('player pressed', playerPressed);
    // 
    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

     console.log(playerPressed, expectedAlphabet);
     if(playerPressed === expectedAlphabet){
        console.log('you got a point')
        // const currentScore= document.getElementById('current-score');
        // const updatedScore= currentScore + 1;
        // setElementValueById('current-score', updatedScore)
        

        // -------------------------------------------------------
        // Score updated
        // 1. get the current score
        const currentScoreElement= document.getElementById('current-score') ;
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);
        

        // 2.increase the score by 1
        const newScore= currentScore + 1;

        // 3.show the updated score
        currentScoreElement.innerText= newScore;

        // start a new round
        removebackgroundColorById(expectedAlphabet);
        continueGame();
       
     }
     
     else{
        console.log('you missed , you lost a life')
        
        // step-1: get the current life number
        const currentLifeElement=document.getElementById('current-life');
        const currentlifeText=currentLifeElement.innerText;
        const currentLife= parseInt(currentlifeText);
        console.log( currentLife);

        
       

        // step-2: reduce the life number
        const newLife= currentLife - 1;

        // step-3: display the updated life count
        currentLifeElement.innerText = newLife ; 
     }
}


document.addEventListener('keyup',handleKeybordButtonPress);




function continueGame(){
    const alphabet= getTandomAlphabets();
    const currentAlphabetElement= document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet ;
    setBackgroundColorById(alphabet);

}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
}