document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{ 
    row: 0,
    col: 0,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 0,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 0,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 0,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 1,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 1,
    col: 1,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 1,
    col: 2,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 1,
    col: 3,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 2,
    col: 0,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 2,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 2,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 2,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 3,
    col: 0,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 3,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true 
  }, { 
    row: 3,
    col: 2,
    isMine: true,
    isMarked: true,
    hidden: true 
  }, { 
    row: 3,
    col: 3,
    isMine: false,
    isMarked: false,
    hidden: true 
  }]
}

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener("contextmenu", checkForWin)
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
  lib.displayMessage('You win!')
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

