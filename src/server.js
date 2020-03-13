
const express =  require('express')
const app = express()
const port = 1709

app.get( '/', ( req, res ) => {
    res.send( '<h1>Em desenvolvimento</h1>' )
})

app.listen( port, err => {
    if ( err ) throw err
    console.log( `Servidor Aberto na porta ${port}: http://localhost:${port}/` )
})
