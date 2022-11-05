//Importando paquetes
const axios = require('axios')
const http = require('http')


//const { info } = require('console')
const fs = require('fs')
//const url = require('url')

const port = process.env.PORT 

http
    .createServer((req, res)=> {

        if (req.url == '/') {
            //console.log(req.url)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile('index.html', 'utf8', (err, html) => {

             res.write(html)
             res.end()

            // o solo la respuesta como parametro de res.end()

            //res.end(html)
            })
        }

        if (req.url.startsWith('/pokemones')) {
            res.writeHead(200, { 'Content-Type': 'application/json' })

            let pokemones = []

            async function pokemonesGet() {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
                return data.results
            }
    
            async function getFullData(name) {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                return data
            }

            pokemonesGet().then((results) => {
                results.forEach((p) => {
                    let pokemonName = p.name
                    //console.log(pokemonName)
                    pokemones.push(getFullData(pokemonName))
                })
                Promise.all(pokemones).then((data) => {
                    let infoP = []
                    data.forEach((d) => {
                        let img = d.sprites.front_default
                        let nombre = d.name
                        //console.log(p.sprites.back_default)
                        //console.log(`${img} => url: ${nombre}`)
                        infoP.push({ img, nombre })
                    })
                    //console.log(JSON.stringify(infoP))
                    res.write(JSON.stringify(infoP))
                    res.end()
    
                    //console.log(info)
                })
            })
        }
    })
    .listen(`${port}`, () => console.log(`Servidor encendido. http://localhost:${port}`))