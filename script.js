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

  const updateBoard = (row, column, marker) => {
    board[row][column] = marker;
    return board;
  };

  return { board, getBoard, updateBoard };
})();

function player(name, marker) {
  return {
    name,
    marker,
    score: 0,
    addScore: function () {
      this.score++;
    },
    resetScore: function () {
      this.score = 0;
    },
  };
}

const game = {
  players: [player("Player One", "X"), player("Player Two", "O")],
  winPattern: [
    // Rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
  ],
  currentTurn: 0,

  playerTurn: function () {
    return this.players[this.currentTurn];
  },
  nextTurn: function () {
    this.currentTurn = (this.currentTurn + 1) % this.players.length;
    this.playerTurn();
  },

  roundWin: function (player) {
    const board = gameBoard.getBoard();

    for (const pattern of this.winPattern) {
      const [a, b] = pattern[0];
      const [c, d] = pattern[1];
      const [e, f] = pattern[2];

      if (
        board[a][b] === player.marker &&
        board[c][d] === player.marker &&
        board[e][f] === player.marker
      ) {
        player.addScore();
        gameBoard.updateBoard(a, b, player.marker);
        gameBoard.updateBoard(c, d, player.marker);
        gameBoard.updateBoard(e, f, player.marker);
        return true;
      }
    }

    return false;
  },
  bestOfthree: function () {
    if (this.players[0].score === 3 || this.players[1].score === 3) {
      this.players[0].resetScore();
      this.players[1].resetScore();
      return `${this.players[0].name} has won`;
    } else {
      return "No winner yet";
    }
  },
};
const displayController = (function () {})();
