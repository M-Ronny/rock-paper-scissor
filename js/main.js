const button = document.querySelectorAll('.btn')
const playerScore = document.querySelector('.player')
const computerScore = document.querySelector('.computer')
const p = document.querySelector('p')

button.forEach(element => {
    element.addEventListener('click', playGame)
})

async function playGame() {
    let playerChoose = event.target.value
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
    } else if (computer === 'rock' && player === 'scissor' || computer === 'paper' && player === 'rock' || computer === 'scissor' && player === 'paper') {
        p.textContent = 'POINT COMPUTER'
        computerScore.textContent = Number(computerScore.textContent) + 1
    } else {
        p.textContent = 'DRAW NO POINT'
    }
}