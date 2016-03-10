var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


app.use(passport.initialize());

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer);

app.use(express.static(__dirname + '/public'));




passport.use(new LocalStrategy(
function (username, password, done)
{
    if (username == password)
    {
        return done(null, { username: username, firstname: 'Alice' });

    }
    return done(null, false, { message: 'Unable to login' });
}));


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
   
        done(err, user);
});


app.post("/login", passport.authenticate('local'), function (req, res) {
    console.log("login");
    console.log(req.user);
    res.json(req.user);
});

app.listen(3000);