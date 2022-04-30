const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Inizializations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Middlers
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'myapp',
    resave: true,
    saveUninitialized: true
}))
//Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/posts'));
app.use(require('./routes/users'));
//Static Files
app.use(express.static(path.join(__dirname, 'public')));
//Server is listening 
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('get'));
});