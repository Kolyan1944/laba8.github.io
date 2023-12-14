let userScore = 0;
let computerScore = 0;
let rounds = 0;
let maxRounds = 3;  // 
let userName;

function startGame() {
  userName = prompt('Введіть своє ім\'я:');
  if (!userName) {
    alert('Будь ласка, введіть ім\'я для початку гри.');
    return;
  }

  document.getElementById('playerName').innerText = userName;
  playRound();
}

function playRound() {
  if (rounds < maxRounds) {
    const computerName = 'Комп\'ютер';
    document.getElementById('computerName').innerText = computerName;

    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById('playerNumber').innerText = `Число: ${userNumber}`;
    document.getElementById('computerNumber').innerText = `Число: ${computerNumber}`;

    updateResult(userNumber, computerNumber);
  } else {
    endGame();
  }
}

function updateResult(userNumber, computerNumber) {
  let result = compareNumbers(userNumber, computerNumber);

  if (result === 0) {
    alert('Нічия в цьому раунді!');
  } else if (result === 1) {
    alert('Ви виграли цей раунд!');
    userScore++;
  } else {
    alert('Ви програли цей раунд.');
    computerScore++;
  }

  rounds++;

  if (rounds === maxRounds) {
    endGame();
  }
}

function compareNumbers(userNumber, computerNumber) {
  if (userNumber > computerNumber) {
    return 1;
  } else if (userNumber < computerNumber) {
    return -1;
  } else {
    return 0;
  }
}

function endGame() {
  let resultMessage = '';

  if (userScore > computerScore) {
    resultMessage = `${userName} переміг гру з рахунком ${userScore}:${computerScore}!`;
  } else if (userScore < computerScore) {
    resultMessage = `${userName} програв гру з рахунком ${userScore}:${computerScore}.`;
  } else {
    resultMessage = `Гра закінчилась внічию з рахунком ${userScore}:${computerScore}.`;
  }

  alert(resultMessage);
  resetGame();
}


function resetGame() {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  document.getElementById('playerName').innerText = '';
  document.getElementById('playerNumber').innerText = '';
  document.getElementById('computerName').innerText = '';
  document.getElementById('computerNumber').innerText = '';

  document.getElementById('playButton').style.display = 'inline';
}

window.onload = startGame;
