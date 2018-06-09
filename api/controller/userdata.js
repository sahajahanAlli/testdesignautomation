var Usercontol = require('./userController');
var User = Usercontol.userschema;
var Users = new User();

Users.name = "admin";
Users.email = "admin@gmail.com";
Users.password = 'admin';

console.log(Users);

module.exports.validate = function(req, res, next) {
    console.log(req.body)
    var user = req.body.uname;
    var pass = req.body.psw;
    console.log('Validate Area....');
    console.log('User : ' + user + " password: " + pass);
    if (user == Users.name && pass == Users.password) {
        return res.redirect('./relationalDrag1');
    } else {
        return res.render('welcome', { title: 'Welcome To MetroBank', error: 'Invalid username or password' });
    }
}