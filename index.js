const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser'); // express does not parse a payload by defeault. Thus, it required a seperate library to do so
require('./models/User'); // connection to BD
require('./models/Survey');
require('./services/passport'); // logic of behavior for authentication

mongoose.connect(keys.mongoURI);

const app = express(); // redirection 

app.use(bodyParser.json()); // parsing post-requrets
app.use(
    cookieSession ({
        maxAge: 30 * 24 * 60 * 60 * 1000,// how long cookie can leave inside a browser. Numbres represents 30 days in a milsec
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingsRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // express will serve up production assets like main.js or main.css file if it knows the route
    app.use(express.static('client/build'));

    // express will redirect to index.html if the route is unknown
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);