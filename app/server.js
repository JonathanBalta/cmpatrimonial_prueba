const express = require('express');
let app = express();

const path = require('path');
const morgan = require('morgan')
const session = require('express-session')

// settings 
app.set('port', process.env.PORT || 8080)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({

    secret: 'mysecrekey_:)',
    resave: false,
    saveUninitialized: false
}))

// static files 
app.use(express.static(path.join(__dirname, 'static')))

// routes 
app.use(require('./routes/index.routes'))
app.use(require('./routes/services.routes'))

module.exports = app;