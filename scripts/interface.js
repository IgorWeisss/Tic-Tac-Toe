let cells = document.getElementsByClassName('cell')
let button = document.getElementsByClassName('button')[0]
let stat = document.getElementById('status')
let message = document.getElementById('message')
let interval
let icons = ['&#x26BD','&#x274C']

onload = () => {
  button.addEventListener('click', startNewGame)
  for (let i of cells) {
    i.addEventListener('click', clickHandler)
  }
  randomIcons()
}

function randomIcons () {
  interval = setInterval(() => {
    for (let i of cells) {
      i.className = `cell ${players[Math.round(Math.random())]}`
    }
  }, 800);
}

function startNewGame () {
  clearInterval(interval)
  for (let i of cells) {
    i.className = 'cell'
  }
  gameOver = false
  draw = false
  button.innerHTML = 'Recomeçar'
  actualPlayer = 0
  message.innerHTML = `É a vez do jogador ${icons[actualPlayer]}`
  stat.className = 'status'
  gameOver = false
  board = [,,,,,,,,,]
}

function clickHandler(event) {
  let id = event.target.id
  updateCell(id)
  registerPlay(id)
  updateMessage()
}

function updateCell(id) {
  if (!gameOver){
    cells[id].className += ` ${players[actualPlayer]}`
  }
}

function updateMessage() {
  if (draw) {
    stat.className += ` draw`
    message.innerHTML = `Empate!`
  } else if (gameOver) {
    stat.className += ` winner`
    message.innerHTML = `Vitória do jogador ${icons[actualPlayer]}`
  } else {
    message.innerHTML = `É a vez do jogador ${icons[actualPlayer]}`
  }
}