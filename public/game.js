var game = new Game
var options = { rock: new Rock('player'), paper: new Paper('player'), scissors: new Scissors('player') };
var computer = function(){
  choices = [new Rock('computer'), new Paper('computer'), new Scissors('computer')];
  return choices[Math.floor(Math.random()* choices.length)];
};
var decideWinner = function(playerChoice){
  var computerChoice = computer();
  return game.winner(playerChoice, computerChoice);
};

var andTheWinnerIs = function(winner) {
  if(winner.type !== undefined) {
    $('#result').prepend(game.messageWin(winner));
    $('#result').prepend('<li></li>');
  } else {
    $('#result').prepend('It was a draw');
    $('#result').prepend('<li></li>');
  };

};

var playerChoice = function(choice){
  return options[$(choice).data('option')];
}

$('img').on('click', function(){
  andTheWinnerIs(decideWinner(playerChoice(this)));
})
