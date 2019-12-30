var mongoose = require('mongoose');
require('./dao/model/user.js');

var dbURI = 'mongodb://localhost/shop';
mongoose.connect(dbURI);
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to' + dbURI);
})