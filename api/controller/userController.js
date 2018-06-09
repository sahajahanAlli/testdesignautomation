// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
var userControl = {

    userschema: function() {
        // define schema
        var userDetails = new Schema({
            name: String,
            email: String,
            password: String,
        });

        mongoose.model('User', userDetails);
    },
    fetchTCSfromDB: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
        console.log('I am inside admin');

        next();
    }

}

module.exports = userControl