var options = {rock: new Rock, paper: new Paper, scissors: new Scissors};
var game = new Game
var computer = function(){
	choices = [new Rock, new Paper, new Scissors];
	return choices[Math.floor(Math.random()* choices.length)];
};
var decideWinner = function(playerChoice){
	return game.winner(playerChoice, computer())
};


var andTheWinnerIs = function(winner) {
	if(winner.type !== undefined)
		$('#result').text("The winner is " + winner.type)
	else
		$('#result').text("It's a draw")
};


var playerChoice = function(choice){
	return options[$(choice).data('option')]
}

$('img').on('click', function(){
	andTheWinnerIs(decideWinner(playerChoice(this)))
})