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
  board[0][0] = "X";
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

  playerTurn: function () {
    return this.players[0] ? this.players[1] : this.players[0];
  },

  roundWin: function () {
    const { board } = gameBoard;
    function checkForWin(player) {
      for (const pattern of winPattern) {
        const [a, b] = pattern[0];
        const [c, d] = pattern[1];
        const [e, f] = pattern[2];

        if (
          board[a][b] === player &&
          board[c][d] === player &&
          board[e][f] === player
        ) {
          return true; // Player has won using this pattern
        }
      }

      return false; // No win using any pattern
    }
  },
  bestOfthree: function () {},
};
const displayController = (function () {})();
const { board } = gameBoard;
