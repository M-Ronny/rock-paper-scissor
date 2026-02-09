const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('click', playGame)
})

async function playGame() {
    const computer = 'bot'
    const res = await fetch(`/api?bot=${computer}`)
    const data = await res.json()

    console.log(data)
}