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
   'scissors beats paper',
   'rock beats scissors',
   'paper beats rock',
];
const trustedInputs = ['scissors', 'paper', 'rock'];

let playerScore = 0;
let oppScore = 0;

function startGame(a) {
   let found = false;
   console.log(a);
   for (const input of trustedInputs) {
      if (input === a) {
         found = true;
         break;
      }
   }
   if (found) {
      let test = oppValue();
      displayActions(String(a), trustedInputs[test - 1]);
      determineWin(moves[a], test);
      updateScore(playerScore, oppScore);
   } else console.log(`${a} is not trusted input`);
}

function determineWin(player, opp) {
   let playerWon = false;
   let result;

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
      console.log('Player won ' + result);
   } else if (player === opp) {
      console.log('Draw!');
   } else {
      oppScore++;
      console.log('Computer won ' + result);
   }
}

function updateScore(player, opp) {
   console.log('Player: ' + player);
   console.log('Computer: ' + opp);

   document.getElementById('playerScore').innerHTML = player;
   document.getElementById('oppScore').innerHTML = opp;
}

function oppValue() {
   let b = Math.floor(Math.random() * 3 + 1);
   let d;
   //console.log(moves[b]);

   for (const key of Object.keys(moves)) {
      const val = moves[key];
      if (moves[key] === b) {
         d = moves[key];
         break;
      }
   }
   return d;
}

function displayActions(player, opp) {
   playerAction = document.getElementById('playerAction');
   playerAction.className = `flipPlayerAction fas fa-hand-${player}`;

   oppAction = document.getElementById('oppAction');
   oppAction.className = `fas fa-hand-${opp}`;
}
