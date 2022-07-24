let secretNumber = Math.floor(Math.random() * 10 + 1) 
let container = document.getElementById('container');
let submitButton = document.getElementById("submitGuess");
let newGameButton = document.getElementById("newGame");
let result =  document.getElementById("result");

submitButton.addEventListener('click', function(){
    let userGuess = document.getElementById("guessField").value;

    if(userGuess == secretNumber){
        result.innerText = "You win!";
        container.style.backgroundColor = 'yellow';
    } else if (userGuess > secretNumber){
        result.innerText = "Too high!";
        container.style.backgroundColor = 'Red';
    } else {
        result.innerText = "Too Low!";
        container.style.backgroundColor = 'Red';
    }
})

newGameButton.addEventListener('click', function(){
    result.innerText = "Let's play again!";
    container.style.backgroundColor = '#DDD';
    document.getElementById('guessField').value = '';
    secretNumber = Math.floor(Math.random()* 10 + 1);

})