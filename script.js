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

  console.table(board);
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

const displayController = (function () {})();

const game = {
  playeOne: player("Palyer One", "X"),
  PlayerTwo: player("Player Two", "O"),
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
};
