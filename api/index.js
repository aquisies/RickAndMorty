// express sequalize pg morgan
const express = require ('express');
const morgan= require('morgan');
const routes= require('./src/routes/index');
const errorHandler= require('./src/utils/middlewares/errorHandler');
const setHeaders= require('./src/utils/middlewares/setHeaders');
const {conn}= require('./src/models')
const {PORT}=require('./src/utils/config/index');
const app  = express()

//setear todos nuestros headers
app.use(express.urlencoded({extended:true, limit: '50mb'}));
app.use(express.json({limit:'50mb'}) )  
app.use(morgan('dev'));
app.use(setHeaders);

//setear nuestras rutas
app.use('/api', routes);
//middleware control de errores
app.use(errorHandler);

//server.listen
//conn.sync({force: true})
conn.sync({force: false})
.then(()=>{
    console.log ('base de datos conectada!');
    app.listen(PORT, ( )=>{
     console.log(`el servidor esta escuchando en el puerto ${PORT}`);
    })


})