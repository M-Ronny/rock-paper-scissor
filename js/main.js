const button = document.querySelectorAll('.btn')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const p = document.querySelector('p')

button.forEach(element => {
    element.addEventListener('click', playGame)
})

async function playGame() {
    let playerChoose = event.currentTarget.value
    const computer = 'bot'
    const res = await fetch(`/api?bot=${computer}`)
    const data = await res.json()

    checkResult(playerChoose, data.computer)
}

function checkResult(player, computer) {
    console.log(player)
    console.log(computer)

    if (player === 'rock' && computer === 'scissor' || player === 'paper' && computer === 'rock' || player === 'scissor' && computer === 'paper') {
        p.textContent = 'POINT PLAYER'
        playerScore.textContent = Number(playerScore.textContent) + 1
        checkWinner(Number(playerScore.textContent), Number(computerScore.textContent))
    } else if (computer === 'rock' && player === 'scissor' || computer === 'paper' && player === 'rock' || computer === 'scissor' && player === 'paper') {
        p.textContent = 'POINT COMPUTER'
        computerScore.textContent = Number(computerScore.textContent) + 1
        checkWinner(Number(playerScore.textContent), Number(computerScore.textContent))
    } else {
        p.textContent = 'DRAW NO POINT'
    }
}

function checkWinner(ps, cs) {
    console.log(ps)
    console.log(cs)

    if (ps == 5) {
        p.textContent = 'PLAYER WINS!'
        playerScore.textContent = 0
        computerScore.textContent = 0
    }

    if (cs == 5) {
        p.textContent = 'COMPUTER WINS!'
        computerScore.textContent = 0
        playerScore.textContent = 0
    }
}