function Rock(owner){
  this.type = 'Rock'
  this.owner = owner;
};
function Scissors(owner){
  this.type = 'Scissors'
  this.owner = owner;
};
function Paper(owner){
  this.type = 'Paper'
  this.owner = owner;
};

function Game(){};


Game.prototype.winner= function(choice1, choice2) {
  if(choice1.type === 'Rock' && choice2.type === 'Scissors') return choice1;
  if(choice1.type === 'Paper' && choice2.type === 'Rock') return choice1;
  if(choice1.type === 'Scissors' && choice2.type === 'Rock') return choice2;
  if(choice1.type === 'Rock' && choice2.type === 'Paper') return choice2;
  if(choice1.type === 'Scissors' && choice2.type === 'Paper') return choice1;
  if(choice1.type === 'Paper' && choice2.type === 'Scissors') return choice2;
  if(choice1.type === choice2.type) return 'Draw';
};

Game.prototype.messageWin = function(winChoice) {
  if(winChoice.owner === 'player') winnerName = 'You'
  if(winChoice.owner === 'computer') winnerName = 'The computer'	
  if(winChoice.type === 'Rock') winningAction = 'Rock destroys scissors';
  if(winChoice.type === 'Scissors') winningAction = 'Scissors cuts paper';
  if(winChoice.type === 'Paper') winningAction = 'Paper covers rock';
  return winnerName + ' win! ' + winningAction
};
