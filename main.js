let modal = document.getElementById('modal-wrapper');
let playBtn = document.getElementById('playBtn');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');

let playerAction = document.getElementById('playerAction');
let oppAction = document.getElementById('oppAction');

document.getElementById('scissors').addEventListener('click', function() {
   startGame(this.value);
});
document.getElementById('paper').addEventListener('click', function() {
   startGame(this.value);
});
document.getElementById('rock').addEventListener('click', function() {
   startGame(this.value);
});

const moves = {scissors: 1, paper: 2, rock: 3};
const outcomes = [
   'Scissors beats paper',
   'Rock beats scissors',
   'Paper beats rock',
];
const winner = ['Draw', 'Player Won', 'Computer Won'];
const trustedInputs = ['scissors', 'paper', 'rock'];

let playerScore = 0;
let oppScore = 0;

window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
};

function startGame(action) {
   let found = false;
   for (const input of trustedInputs) {
      if (input === action) {
         found = true;
         break;
      }
   }
   if (found) {
      let comVal = oppValue();
      displayActions(String(action), trustedInputs[comVal - 1]);
      determineWin(moves[action], comVal);
      setTimeout(function() {
         updateScore(playerScore, oppScore);
      }, 750);
   } else console.log(`${action} is not trusted input`);

   setTimeout(function() {
      modal.style.display = 'grid';
   }, 3250);
}

function determineWin(player, opp) {
   let playerWon = false;
   let draw = false;
   let result;
   let winnerResult;

   switch (player) {
      case 1:
         if (opp === 2) {
            playerWon = true;
            result = outcomes[0];
         }
         if (opp === 3) result = outcomes[1];
         break;
      case 2:
         if (opp === 1) result = outcomes[0];
         if (opp === 3) {
            result = outcomes[2];
            playerWon = true;
         }
         break;
      case 3:
         if (opp === 1) {
            playerWon = true;
            result = outcomes[1];
         }
         if (opp === 2) result = outcomes[2];
         break;
      default:
         console.log('Error');
   }

   if (playerWon) {
      playerScore++;
      winnerResult = winner[1];
   } else if (player === opp) {
      winnerResult = winner[0];
   } else {
      oppScore++;
      winnerResult = winner[2];
   }

   if (result === undefined) result = 'No One Won';

   displayResult(winnerResult, result);
}

function updateScore(player, opp) {
   document.getElementById('playerScore').innerHTML = player;
   document.getElementById('oppScore').innerHTML = opp;
}

function oppValue() {
   let moveIndex = Math.floor(Math.random() * 3 + 1);
   let move;

   for (const key of Object.keys(moves)) {
      const val = moves[key];
      if (moves[key] === moveIndex) {
         move = moves[key];
         break;
      }
   }
   return move;
}

function displayActions(player, opp) {
   playerAction.className = 'flipPlayerAction fas fa-hand-rock player-shaking';
   oppAction.className = 'fas fa-hand-rock opp-shaking';

   setTimeout(function() {
      playerAction.className = `flipPlayerAction fas fa-hand-${player}`;
      oppAction.className = `fas fa-hand-${opp}`;
   }, 750);
}

function displayResult(playerWon, result) {
   setTimeout(function() {
      document.getElementById('finalResult').innerHTML =
         playerWon + ': ' + result;
   }, 750);
}

playBtn.onclick = function() {
   modal.style.display = 'grid';
};

scissors.onclick = function() {
   modal.style.display = 'none';
};

paper.onclick = function() {
   modal.style.display = 'none';
};

rock.onclick = function() {
   modal.style.display = 'none';
};
