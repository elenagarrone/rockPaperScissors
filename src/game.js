var options = {rock: new Rock, paper: new Paper, scissors: new Scissors};
var game = new Game
var computer = function(){
	choices = [new Rock, new Paper, new Scissors];
	return choices[Math.floor(Math.random()* choices.length)];
};
var decideWinner = function(playerChoice){
	var computerChoice = computer()
	return game.winner(playerChoice, computerChoice)
};

var andTheWinnerIs = function(winner, draw) {
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