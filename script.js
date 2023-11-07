const gameBoard = (function () {
  const rows = 3;
  const columns = 3;
  let board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = [];
    }
  }
  const getBoard = () => board;

  return { board, getBoard };
})();

function player(name, marker) {
  return {
    name,
    marker,
    score: 0,
    addScore: function () {
      this.score++;
    },
  };
}

const game = {
  players: [
    {
      name: "Player One",
      token: "X",
    },
    {
      name: "Player Two",
      token: "O",
    },
  ],
  winPattern: [
    [[0][0], [0][1], [0][2]],
    [[1][0], [1][1], [1][2]],
    [[2][0], [2][1], [2][2]],
    [[0][0], [1][0], [2][0]],
    [[0][1], [1][1], [2][1]],
    [[0][2], [1][2], [2][2]],
    [[2][0], [1][1], [0][2]],
    [[0][0], [1][1], [2][2]],
  ],
  playerTurn: function () {
    player = this.players[0] ? this.players[1] : this.players[0];
  },
  roundWin: function () {
    const { board } = gameBoard;
    if (board[this.winPattern] === true) {
      this.players.addScore();
      return `${this.players.name}: ${this.players.token} won this round`;
    } else {
      return "tie";
    }
  },
  bestOfthree: function () {},
};
const displayController = (function () {})();
