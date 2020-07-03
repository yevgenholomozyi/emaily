const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // connection to BD
require('./services/passport'); // logic of behavior for authentication

mongoose.connect(keys.mongoURI);

const app = express(); // redirection 

app.use(
    cookieSession ({
        maxAge: 30 * 24 * 60 * 60 * 1000,// how long cookie can leave inside a browser. Numbres represents 30 days in a milsec
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);