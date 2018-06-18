var Usercontol = require('./userController');
var User = Usercontol.userschema;
var Users = new User();

Users.name = "admin";
Users.email = "admin@gmail.com";
Users.password = 'admin';

console.log(Users);

module.exports.validate = function(req, res, next) {
    console.log(req.body)
    var user = req.body.username;
    var pass = req.body.password;
    console.log('Validate Area....');
    console.log('User : ' + user + " password: " + pass);
    if (user == Users.name && pass == Users.password) {
        console.log('validation done')
        return res.redirect('/relationalDrag1');
    } else {
        return res.render('welcome_1', { title: 'Welcome To MetroBank', error: 'Invalid username or password' });
    }
}