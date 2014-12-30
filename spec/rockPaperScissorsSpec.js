describe('RPS', function(){

  beforeEach(function(){
    rock = new Rock('player')
    scissors = new Scissors('player')
    paper = new Paper('computer')
  });

  describe('Playing the game', function(){

    beforeEach(function(){
      game = new Game
    });

    it('Rock beats Scissors', function(){
      expect(game.winner(rock, scissors)).toEqual(rock);
    });

    it('Scissors loses to rock', function(){
      expect(game.winner(scissors, rock)).toEqual(rock);
    });

    it('Paper beats rock', function(){
      expect(game.winner(paper, rock)).toEqual(paper);
    });

    it('Rock loses to paper', function(){
      expect(game.winner(rock, paper)).toEqual(paper);
    });

    it('Scissor beats paper', function(){
      expect(game.winner(scissors, paper)).toEqual(scissors);
    });

    it('Paper loses to scissors', function(){
      expect(game.winner(paper, scissors)).toEqual(scissors);
    });

    it('Rock draws rock', function(){
      expect(game.winner(rock, rock)).toEqual('Draw');
    });

  });

  describe('The types of weapons', function(){

    it('rock', function(){
      expect(rock.type).toEqual('Rock');
    });

    it('scissors', function(){
      expect(scissors.type).toEqual('Scissors');
    });

    it('paper', function(){
      expect(paper.type).toEqual('Paper');
    });

  });

  describe('When displaying the winner messages', function(){

    it('rock vs scissors: Rock destroys scissors', function(){
      expect(game.messageWin(rock)).toEqual("You win! Rock destroys scissors");
    });

    it('scissors vs paper: Scissors cuts paper', function(){
      expect(game.messageWin(scissors)).toEqual("You win! Scissors cuts paper");
    });

    it('paper vs rock: Paper covers rock', function(){
      expect(game.messageWin(paper)).toEqual("The computer win! Paper covers rock");
    });

  });

});
