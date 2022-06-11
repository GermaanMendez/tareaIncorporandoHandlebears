// Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
// Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
// Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
// Ambas páginas contarán con un botón que redirija a la otra.

const express = require('express')
const {engine} = require('express-handlebars')


const app = express()

const productos =[
    {name:'Iphone 6',price:100},
    {name:'Iphone 7',price:200},
    {name:'Iphone 8',price:300},
    {name:'Iphone 10',price:400},
    {name:'Iphone 11',price:500},
    {name:'Iphone 12',price:600},
]


//engine,nombre y callback
app.engine('hbs',engine({
    //propio de la libreria que es la extension
    extname:'.hbs',
    //es la plantila principal, de ahi heredan las demas o en caso de que no se pase el nombre le digo cual tiene que usar por defecto
    defaultLayout:'index.hbs',
    //directorio 
    // layoutDir:__dirname + '/views/layouts',
}))
//seteos de que motor voy a utilizar y su nombre en este caso motor hbs, y ademas la carpeta de las vistas
app.set('view engine','hbs')
app.set('views','./handlebears/views')

// Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).

app.get('/',(req,res)=>{
    res.render('formulario')
})

//ocurre cuando la url es /template
app.get('/productos',(req,res)=>{
    //hago render del archivo main y le paso la lista y le digo true para verificar el if
    res.render('lista',{
        products:productos,
        listExists:true
    })
})

// ocurre cuando la url es /template
// app.get('/formulario',(req,res)=>{
//     //hago render del archivo main y le paso la lista y le digo true para verificar el if
//     res.render('formulario')
// })

app.post('/productos',(req,res)=>{
    productos.push(req.body)
    console.log(req.body,' added to productos')
    res.render('lista',{
        products:productos,
        listExists:true
    })
})


app.listen(8086)










