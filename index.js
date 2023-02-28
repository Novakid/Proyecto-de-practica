//Aquí va el backend
const express = require('express')
const app = express()
const ruta = '/'
const port = 3000
const cors = require('cors')

app.use(cors())

app.listen(port, () =>{
    console.log(`Ingreso al puerto:${port}`)
})

app.get(ruta, (req,res) => {res.send('hola, vengo del backend. :)')})
