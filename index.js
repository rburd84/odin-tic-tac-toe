const Gameboard = (function () {
  const board = new Array(9);
  const printBoard = () => board;
  const placeMarker = (index, mark) => {
    board[index] = mark;
  };

  return { printBoard, placeMarker };
})();

const game = {};

function Player(name) {
  this.name = name;
  this.score = 0;
}

Gameboard.placeMarker(4, "X");
Gameboard.placeMarker(1, "O");
Gameboard.placeMarker(3, "X");
Gameboard.placeMarker(5, "O");
console.log(Gameboard.printBoard());
