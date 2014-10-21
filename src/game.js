var options = {rock: new Rock('player'), paper: new Paper('player'), scissors: new Scissors('player')};
var game = new Game
var computer = function(){
	choices = [new Rock('computer'), new Paper('computer'), new Scissors('computer')];
	return choices[Math.floor(Math.random()* choices.length)];
};
var decideWinner = function(playerChoice){
	var computerChoice = computer()
	return game.winner(playerChoice, computerChoice)
};

var andTheWinnerIs = function(winner) {
	if(winner.type !== undefined)
		$('#result').text(game.messageWin(winner))
	else 
		$('#result').text('It was a draw')
};

var playerChoice = function(choice){
	return options[$(choice).data('option')]
}

$('img').on('click', function(){
	andTheWinnerIs(decideWinner(playerChoice(this)))
})