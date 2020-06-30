const WORD_ARRAY = ['cat', 'dog', 'king', 'sky'];

class Game {
  ADD_POINT = 100;

  constructor(id, players) {
    this.state = {
      roomName: id,
      guesser: '',
      word: '',
      point: 0,
      round: 0,
    };
    this.wordArray = [];
    this.players = players;
    this.totalRound = players.length * 2;

    this.initGame();
  }

  initGame() {
    // TODO: Get Array Data
    this.wordArray = WORD_ARRAY;
    this.setState('guesser', this.players[0]);
    this.setState('word', this.wordArray[0]);
    this.setState('point', 0);
    this.setState('round', 0);
  }

  checkAnswer(answer) {
    const word = this.state.word;
    let correct = false;

    if (word === answer) {
      this.setState('point', this.state.point + this.ADD_POINT);
      correct = true;
    }

    return correct;
  }

  nextRound() {
    const players = this.players;
    let round = this.state.round + 1;
    let nextGuesser;

    if (round >= players.length) {
      // round = 5 player =3 5-3
      nextGuesser = players[round - players.length];
    } else {
      nextGuesser = players[round];
    }

    this.setState('round', round);
    this.setState('guesser', nextGuesser);
    this.setState('word', this.wordArray[round]);

    return this.state;
  }

  setState(key, value) {
    this.state[key] = value;
  }

  getState() {
    return this.state;
  }

  checkLastRound() {
    return this.state.round + 1 === this.totalRound ? true : false;
  }
}

module.exports = Game;
