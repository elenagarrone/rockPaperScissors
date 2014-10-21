var game = new Game
var draw = new Draw
var computer = function(){
	choices = [new Rock, new Paper, new Scissors];
	return choices[Math.floor(Math.random()* choices.length)];
};
var decideWinner = function(){
	return game.winner(new Rock, computer())
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
	andTheWinnerIs(decideWinner());
})

$('#paper').on('click', function(){
	andTheWinnerIs(game.winner(new Paper, computer()));
})

$('#scissors').on('click', function(){
	andTheWinnerIs(game.winner(new Scissors, computer()));
})
