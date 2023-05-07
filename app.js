const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 3000;

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', ()=>{})

//midleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//definir rutas: login, categorias, index y not found
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/registro',(req,res)=>{
    res.render('table')
})

app.get('*',(req,res)=>{
    res.render('404');
})

//para el desarrollador
app.listen(port,()=>{
    console.log('el servidor express esta ejecutandose en el puerto: '+ port);
})