init()
document.querySelector('img').style.visibility = "hidden"
document.querySelector('#current-0').textContent = "0"
var data = {
    activePlayer: 0,
    currentScore: 0,
    total: [0, 0]
}

document.querySelector('.btn-roll').addEventListener('click', rollHandler)

function rollHandler() {
    var rnd = Math.floor(Math.random() * 6 + 1)
    document.querySelector('img').src = 'dice-' + rnd + '.png'
    if (rnd != 1) {
        data.currentScore += rnd;
        document.querySelector('#current-' + data.activePlayer).textContent = data.currentScore
    } else {
        data.currentScore = 0
        document.querySelector('#current-' + data.activePlayer).textContent = data.currentScore
        nextPlayer()
    }
}

function nextPlayer() {
    document.querySelector('.player-' + data.activePlayer + '-panel').classList.toggle('active')
    document.querySelector('#current-' + data.activePlayer).textContent = 0
    if (data.activePlayer == 0) {
        data.activePlayer = 1
    } else {
        data.activePlayer = 0
    }
    document.querySelector('.player-' + data.activePlayer + '-panel').classList.toggle('active')
}

document.querySelector('.btn-hold').addEventListener('click', hold)

function hold() {
    document.querySelector('#score-' + data.activePlayer).textContent = data.total[data.activePlayer] += data.currentScore
    console.log(data.total[data.activePlayer])
    if (data.total[data.activePlayer] >= 21) {
        win()
    } else {

        nextPlayer()
    }

}

document.querySelector('.btn-new').addEventListener('click', newGame)

function newGame() {

    document.querySelector('img').style.visibility = "visible"
    init()
}

function init() {
    document.querySelector('#score-0').textContent = "0"
    document.querySelector('#score-1').textContent = "0"

    document.querySelector('#current-0').textContent = "0"
    document.querySelector('#current-1').textContent = "0"
}

function win() {
    document.querySelector('.player-' + data.activePlayer + '-panel').classList.add('winner')
    document.querySelector('#name-' + data.activePlayer).textContent = "Winner!"
}