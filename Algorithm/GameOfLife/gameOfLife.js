// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:

// Input:
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]
let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let newBoard = [];

  for (let elem of board) {
    newBoard.push([...elem]);
  }

  let searchArr = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < board.length; i++) {
    let row = board[i];

    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      let count = 0;

      searchArr.forEach((xy) => {
        if (
          i + xy[0] >= 0 &&
          i + xy[0] <= board.length - 1 &&
          j + xy[1] >= 0 &&
          j + xy[1] <= row.length - 1
        ) {
          count += board[i + xy[0]][j + xy[1]];
        }
      });

      if (cell == 0) {
        if (count === 3) {
          newBoard[i][j] = 1;
        }
      } else {
        if (count < 2 || count > 3) {
          newBoard[i][j] = 0;
        }
      }
    }
  }

  console.log('*** Origin Board ***');
  for (let row of board) {
    console.log(row);
  }

  console.log('\n*** New Board ***');
  for (let row of newBoard) {
    console.log(row);
  }
};

gameOfLife(board);
