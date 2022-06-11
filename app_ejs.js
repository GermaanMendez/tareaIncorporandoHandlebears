// Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
// Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
// Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
// Ambas páginas contarán con un botón que redirija a la otra.

const express = require('express')

const app = express()

app.set('views','./ejs/views')
app.set('view engine','ejs')


const productos =[
    {name:'Iphone ',price:100},
    {name:'Iphone ',price:200},
    {name:'Iphone ',price:300},
    {name:'Iphone ',price:400},
    {name:'Iphone ',price:500},
    {name:'Iphone ',price:600},
]


app.get('/',(req,res)=>{
    res.render('formulario')
})

//ocurre cuando la url es /template
app.get('/productos',(req,res)=>{
    //hago render del archivo main y le paso la lista y le digo true para verificar el if
    res.render('lista',{productos})
})

// ocurre cuando la url es /template
// app.get('/formulario',(req,res)=>{
//     //hago render del archivo main y le paso la lista y le digo true para verificar el if
//     res.render('formulario')
// })

app.post('/productos',(req,res)=>{
    productos.push(req.body)
    console.log(req.body,' added to productos')
    res.render('lista',{productos})
})


app.listen(8087)










