const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    function checkPage(page, content) {
        fs.readFile(page, function(err, data) {
            res.writeHead(200, {'Content-Type': content})
            res.write(data)
            res.end()
        })
    }

    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log(page)

    if (page === '/') {
        checkPage('index.html', 'text/html')
    }
    else if (page === '/api') {
        let result;
        if (params['bot'] === 'bot') {
            let num = Math.floor(Math.random() * 3) + 1
            
            if (num == 1) {
                result = 'rock'
            } else if (num == 2) {
                result = 'paper'
            } else if (num == 3) {
                result = 'scissor'
            }
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
            computer: result
        }
        res.end(JSON.stringify(objToJson))
    }
    else if (page === '/css/style.css') {
        fs.readFile('css/style.css', function(err, data) {
            res.write(data)
            res.end()
        }) 
    }
    else if (page === '/js/main.js') {
        checkPage('js/main.js', 'text/javascript')
    }
    else if (page === '/images/rock.png') {
        checkPage('images/rock.png', 'image/png')
    } 
    else if (page === '/images/paper.png') {
        checkPage('images/paper.png', 'image/png')
    }
    else if (page === '/images/scissors.png') {
        checkPage('images/scissors.png', 'image/png')
    }
    else if (page === '/images/background.jpg') {
        checkPage('images/background.jpg', 'image/jpg')
    }
    else {
        figlet('401!', function(err, data) {
            if (err) {
                console.log('ERROR')
                console.dir(err)
                return
            }
            res.write(data)
            res.end()
        })
    }
})

server.listen(5000)