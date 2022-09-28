const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonPaper = document.getElementById('button-paper');

let playerResult =0;
let computerResult = 0;

function buttonClicked(buttonArg) {
	
	clearMessages();
	clearResult();
	console.log(buttonArg + ' został kliknięty');

		function getMoveName(argMoveId) {
			console.log("Wywołano funkcję z argumentem" + argMoveId);
			if (argMoveId == 1) {
				return "kamień";
			} else if (argMoveId == 2) {
				return "papier";
			} else if (argMoveId == 3){
				return "nożyce";
			} else {
				printMessage("Nie znam takiej wartości: " + argMoveId + ", ale przypuszczam że chodziło o kamień.");
				return "kamień";
			}
		}

		function displayResult(argPlayerMove, argComputerMove) {
  			console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  			if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
    			printMessage('Wygrywasz!');
    			playerResult += 1;
  			} else if (argPlayerMove == argComputerMove){
  				printMessage('Remis!');
  			} else {
    			printMessage('Przegrywasz :(');
    			computerResult += 1;
  			}
  			printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  			printResult('Twóje wyniki: <h1>' + playerResult + " -- " + computerResult + "</h1> Wyniki komputera" );
			}

		const playerMove = buttonArg;

		const randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('wylosowana liczba to: ' + randomNumber);

		const computerMove = getMoveName(randomNumber);
		console.log('ruch komputera to: ' + computerMove);
		displayResult(playerMove, computerMove);
}



buttonRock.addEventListener('click', function(){
	buttonClicked('kamień')
});

buttonScissors.addEventListener('click', function(){
	buttonClicked('nożyce')
});

buttonPaper.addEventListener('click', function(){
	buttonClicked('papier')
});