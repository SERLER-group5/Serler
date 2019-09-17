const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const Fawn = require('fawn');
Fawn.init(mongoose);
const express = require('express');
const app = express();

// routes
const usersRoute = require('../routes/users');
const rolesRoute = require('../routes/roles');
const gendersRoute = require('../routes/genders');
const authRoute = require('../routes/auth');

if(!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey not defined');
    process.exit(1);
}
if(!config.get('mongoDbConnection')) {
    console.error('FATAL ERROR: mongoDbConnection not defined');
    process.exit(1);
}

mongoose.connect(config.get('mongoDbConnection'), { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//3rd party middleware
app.use(helmet());
if(app.get('env') === 'development')
    app.use(morgan('tiny'));

app.use('/api/genders', gendersRoute);
app.use('/api/users', usersRoute);
app.use('/api/roles', rolesRoute);
app.use('/api/auth', authRoute);

app.listen(8080);

