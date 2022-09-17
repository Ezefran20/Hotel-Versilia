const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
    res.render('../views/index.ejs')
})
app.get('/room', (req, res) => {
    res.render('../views/rooms.ejs')
})

app.get('/services', (req, res) =>{
    res.render('../views/servicios.ejs')
})
app.get('/tarifas', (req, res) =>{
    res.render('../views/tarifas.ejs')
})


app.listen(PORT, () =>{
    console.log(`Listen at port: ${PORT}`);
})