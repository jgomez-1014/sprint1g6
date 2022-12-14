/* Librerias */
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const Port = process.env.PORT || 8080;

// Configuración de Middelwares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Configuración de la Vista de la Aplicación
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Variables de rutas
const indexRouter = require('./routes/indexRouter');
const indexRouterApodo = require('./routes/indexRouter');

const agregarRouter= require('./routes/agregarRouter');
const agregarRouterCancion= require('./routes/agregarRouter');

const milistaRouter= require('./routes/milistaRouter');
/* const milistaSelApodoRouter= require('./routes/milistaRouter'); */
const milistaBorrarRouter= require('./routes/milistaRouter');


//Routers
app.use('/', indexRouter);
app.post('/Apodo', indexRouterApodo);

app.use('/agregar', agregarRouter);
app.post('/cancion', agregarRouterCancion);

app.use('/mimusica', milistaRouter);
/* app.post('/selApodo', milistaSelApodoRouter) */
app.post('/borrar', milistaBorrarRouter);


app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el Puerto ${Port}`);
});
app.on('error', (error) =>{
    console.log(`Tenemos un error ${error}`);
});


