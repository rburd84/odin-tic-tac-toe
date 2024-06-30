const readlineSync = require("readline-sync");

const Gameboard = (function () {
  let board = new Array(9);

  const printBoard = () => board;

  const placeMarker = (index, mark) => {
    board[index] = mark;
  };

  const resetBoard = () => {
    board = new Array(9);
    return board;
  };

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {};

  return { printBoard, placeMarker, resetBoard, win };
})();

function Player(playerName, playerMark) {
  const name = playerName.charAt(0).toUpperCase() + playerName.slice(1);
  const mark = playerMark;
  let isMove = false;
  const { placeMarker } = Gameboard;
  return { name, mark, isMove, placeMarker };
}

const game = (function () {
  let playing = false;

  while (playing === false) {
    const startGame = readlineSync.question(
      "Would you like to play a game of Tic Tac Toe? (yes or no)"
    );

    if (startGame.trim().toLowerCase() === "yes") {
      playing = true;
    }
    // playing = true;
  }

  const player1Name = readlineSync.question(
    "Please enter a name for player 1: "
  );
  const player2Name =
    readlineSync.question("Please enter a name for player 2: ") || "Computer";

  const player1 = Player(player1Name, "X");
  const player2 = Player(player2Name, "O");

  console.log(player1, player2);
})();

const GameDisplay = function () {};
// function Player(name) {
//   this.name = name;
//   this.score = 0;
// }

// const player1 = Player("Josh", "X");
// const player2 = Player("Paul", "O");

// Gameboard.placeMarker(4, "X");
// Gameboard.placeMarker(1, "O");
// Gameboard.placeMarker(3, "X");
// Gameboard.placeMarker(5, "O");
// console.log(player1);
// player1.placeMarker(4, player1.mark);
// player2.placeMarker(3, player2.mark);
// player1.placeMarker(1, player1.mark);
// player2.placeMarker(7, player2.mark);
// console.log(Gameboard.printBoard());
// Gameboard.resetBoard();
// console.log(Gameboard.printBoard());

function init() {
  game;
}

init();
