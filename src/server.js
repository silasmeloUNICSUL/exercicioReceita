const dados = require('./data/recipes.json')
const express =  require('express')
const bodyParser = require( 'body-parser' )

const app = express()
const port = 1709

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

app.use( '/public', express.static( `${__dirname}/public` ) )

app.set( 'view engine', 'ejs' )
app.set( 'views', `${__dirname}/views` )

app.get( '/', ( req, res ) => {
    res.render( './templates/index', { 
        page: 'home.ejs', 
        params: {} 
    })
})

app.get( '/contato', ( req, res ) => {
    res.render( './templates/index', { 
        page: 'contact.ejs', 
        params: {} 
    })
})

app.get( '/receita/:id', ( req, res ) => {
    const { id } = req.params
    const params = dados[id]

    res.render( './templates/index', { 
        page: 'recipe/index.ejs', 
        params
    })
})

app.listen( port, err => {
    if ( err ) throw err  
    console.log( `Servidor Aberto na porta ${port}: http://localhost:${port}/` )
})
