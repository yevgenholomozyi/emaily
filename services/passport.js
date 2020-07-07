const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id) // there is no error, identify a user in a request. This is mongo id, not a googleId. Used to indentify a user via cookies
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id}) // existingUser in mongoose model instance
        if (existingUser) {
          return done(null, existingUser) // there is no errors, the user is found
        } 
        const  user = await new User({ googleId: profile.id }).save(); // googleId
        done(null, user);
    }
  )
);
