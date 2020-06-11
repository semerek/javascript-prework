
function playGame(playerInput){

  clearMessages();



  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier ';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      throw newError ('zły ruch');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);
  console.log('Ruch komputera to' + argComputerMove)
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  } else if(randomNumber == 2){
    computerMove = 'papier';
  } else if(randomNumber == 3){
    computerMove = 'nożyce';
  }
  */

  printMessage('Mój ruch to: ' + argComputerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Ruch gracza to:' + playerInput);*/

  let argPlayerMove = getMoveName(playerInput);
  console.log('Ruch gracza to:' + argPlayerMove)

  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2'){
    playerMove = 'papier';
  } else if  (playerInput == '3'){
    playerMove ='nożyce';
  }
  */

  printMessage('Twój ruch to: ' + argPlayerMove)

  function displayResult(argPlayerMove, argComputerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if (
        (argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
        (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
        (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
      ){
      printMessage('Wygrałeś!');
    } else if (argPlayerMove == argComputerMove && argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else {
      printMessage('Przegrałeś!');
    }
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  displayResult(argPlayerMove, argComputerMove);

}
document.getElementById('rock').addEventListener('click', function(){
  playGame(1); } );
document.getElementById('paper').addEventListener('click', function(){
  playGame(2); });
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3); });
