
const Gameboard = (function () {
  let board = new Array(9).fill("");

  const printBoard = () => board;

  const placeMarker = (index, mark) => {
    board[index] = mark;
  };

  const resetBoard = () => {
    board = new Array(9).fill("");
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

  const checkWin = () => {
    win.forEach(w => {
      if (board[w[0]] === board[w[1]] && board[w[0]] === board[w[2]] && board[w[0]] !== "") {
        console.log("Winner, winner, chicken dinner");
        return true;
      }
    });
    return false;
  };

  return { printBoard, placeMarker, resetBoard, checkWin, board };
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
    /* readlineSync only works in node.js
    returns error in browser */
    // const startGame = readlineSync.question(
    //   "Would you like to play a game of Tic Tac Toe? (yes or no)"
    // );

    const startGame = prompt(
      "Would you like to play a game of Tic Tac Toe? (yes or no)"
    );

    if (startGame.trim().toLowerCase() === "yes") {
      playing = true;
    }
    // playing = true;
  }

  /* 
  readlineSync only works in node.js returns error in browser 
  const player1Name = readlineSync.question(
    "Please enter a name for player 1: "
  );
  */

  const player1Name = prompt("Please enter a name for player 1: ") || "Player 1";

  /* readlineSync only works in node.js
    returns error in browser */
  // const player2Name =
  //   readlineSync.question("Please enter a name for player 2: ") || "Computer";

  const player2Name =
    prompt("Please enter a name for player 2: ") || "Computer";

  const player1 = Player(player1Name, "X");
  player1.isMove = true;
  const player2 = Player(player2Name, "O");

  while (playing) {
    
    document.querySelectorAll(".square").forEach((square, idx) => {
      square.addEventListener("click", (e) => {
        
        if (player1.isMove && !square.textContent) {
          player1.placeMarker(idx, player1.mark);
          player1.isMove = false;
          player2.isMove = true;
          console.log(idx, e.target, Gameboard.printBoard());
          
        } else if (player2.isMove && !square.textContent){
          player2.placeMarker(idx, player2.mark);
          player2.isMove = false;
          player1.isMove = true;
          console.log(idx, e.target, Gameboard.printBoard());
          
        }
        Gameboard.checkWin();
        GameDisplay.displayBoard();
        
      });
    })

    if (Gameboard.board.length === 9) {
      console.log("Game should end, determine winner, stop further selection");
      playing = false;
    }

  }

  console.log(player1, player2, Gameboard.printBoard());
})();

const GameDisplay = (function () {
  const displayBoard = () => {
    document.querySelectorAll(".square").forEach((square, idx) => {
      square.textContent = Gameboard.board[idx]
    })
  }
  
  return {displayBoard}
})();
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
  GameDisplay;
}

init();
