document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {cells: []}
let size = 6
let difficulty = 0.3

function createBoard () {
  document.querySelector(".board").innerHTML = " "
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      board.cells.push({
        row: i,
        col: j,
        hidden: true,
        isMine: Math.random() < difficulty
      })
    }
  }
}

function resetBoard (){
  document.querySelector(".board").innerHTML = " ";
  board = {cells:[]}
  startGame()
}
  
function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  createBoard();
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  var remaining = board.cells
    .filter(function (cell) {
      return cell.hidden && !cell.isMarked
    })
    if (remaining.length > 0) {
      return 
    }
  var incorrect = board.cells
    .filter(function (cell) {
      return cell.isMarked && !cell.isMine
    })
  if (incorrect.length > 0) {
      return
    }
  lib.displayMessage('Winner!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  return surrounding.filter(function (adjacentCell) {
    return adjacentCell.isMine
  }).length;
}

