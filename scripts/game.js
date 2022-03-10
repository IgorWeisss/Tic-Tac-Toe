let players = ['ball', 'cross']
let gameOver = false
let draw = false
let board = [,,,,,,,,,]
let actualPlayer = 0
let victorySequences = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function registerPlay(id) {
  board[id] = players[actualPlayer]
  if (checkGameOver() || checkDraw()) {
    return
  } else {
    actualPlayer = (actualPlayer==0) ? 1 : 0
  }
}

function checkGameOver() {
  victorySequences.forEach(seq => {
    let p1 = seq[0]
    let p2 = seq[1]
    let p3 = seq[2]

    if(board[p1] == board[p2] &&
      board[p1] == board[p3] &&
      board[p1] != undefined) {
        gameOver= true
      }
  })
  
  return gameOver
}

function checkDraw() {
  let emptyCells = board.length
  board.forEach(cell => {
    if(cell != undefined) {
      emptyCells -= 1
    }
  })
  if(emptyCells == 0) {
    gameOver = true
    draw = true
    return true
  } else {
    return false
  }
}