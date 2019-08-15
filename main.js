const moves = {scissors: 1, paper: 2, rock: 3};
const outcomes = [
   'scissors beats paper',
   'rock beats scissors',
   'paper beats rock',
];

let playerScore = 0;
let oppScore = 0;

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

   updateScore(playerScore, oppScore);
}

function updateScore(player, opp) {
   console.log(player);
   console.log(opp);
}

function getInput(a) {
   let test = oppValue();
   determineWin(moves[a.value], test);
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
