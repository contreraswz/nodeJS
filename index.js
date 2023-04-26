const express = require('express');
const morgan = require('morgan');

//inicializations
const app = express();

//settings
app.set('por', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//Global Var

//Routes

//Public

//Starting the server
app.listen(app.get('port'),()=>{
   console.log('server on port', app.get('port')); 
});