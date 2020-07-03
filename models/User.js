const mongoose = require('mongoose');
const { Schema } = mongoose; //

const userSchema = new Schema ({ // creating a schema for a collection item
    googleId: String,    
})

mongoose.model('users', userSchema); // creating a new collection