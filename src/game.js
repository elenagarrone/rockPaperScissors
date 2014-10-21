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

	// var andTheWinnerIs = function(winner) {
	// 	if(winner === 'Draw')
	// 		$('#result').text("It's a " + Draw.type)
	// 	else
	// 		$('#result').text("The winner is " + winner.type)
	// };

$('#rock').on('click', function(){
	andTheWinnerIs(decideWinner(new Rock));
})

$('#paper').on('click', function(){
	andTheWinnerIs(decideWinner(new Paper));
})

$('#scissors').on('click', function(){
	andTheWinnerIs(decideWinner(new Scissors));
})
