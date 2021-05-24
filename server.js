const  express = require('express')

const app = express();

app.use('/' , function(req , res){
    res.send("hola mundo")
})

app.listen(3000)

console.log(" el porto se esta escuchando en el puerto http://localhost:3000")