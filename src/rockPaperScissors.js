function Rock(){
	this.type = 'Rock'
};
function Scissors(){
	this.type = 'Scissors'
};
function Paper(){
	this.type = 'Paper'
};

function Game(){};
function Draw(){
	this.type = "Draw"
};

Game.prototype.winner= function(choice1, choice2) {
	if(choice1.type === 'Rock' && choice2.type === 'Scissors') return choice1;
	if(choice1.type === 'Paper' && choice2.type === 'Rock') return choice1;
	if(choice1.type === 'Scissors' && choice2.type === 'Rock') return choice2;
	if(choice1.type === 'Rock' && choice2.type === 'Paper') return choice2;
	if(choice1.type === 'Scissors' && choice2.type === 'Paper') return choice1;
	if(choice1.type === 'Paper' && choice2.type === 'Scissors') return choice2;
	if(choice1.type === choice2.type) return Draw.type;
};

