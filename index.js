const http = require('http')
const msg = require('./message.js')
const {loadUser} = require('./user_model')
const {loadVnl2022} = require('./vnl2022_model.js')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res) => {
    const jsonUser = JSON.stringify(loadUser())
    const jsonVnl2022 = JSON.stringify(loadVnl2022())
    
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type' : 'text/plain' })
        res.write(`${msg.message}`)
        res.end()
    }
    else if(req.url === '/vnl2022'){
        res.writeHead(200, { 'Content-Type' : 'text/plain' })
        res.write(`${jsonVnl2022}`)
        res.end()
    }
    else if(req.url === '/users'){
        res.writeHead(200, { 'Content-Type' : 'text/plain' })
        res.write(`${jsonUser}`)
        res.end()
    }
    else {
        res.writeHead(200, { 'Content-Type' : 'text/plain' })
        res.write(`400 NOT FOUND`)
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Start server runnig at http://${host}:${PORT}`)
})
