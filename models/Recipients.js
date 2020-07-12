const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({ // creating a schema 

  email: String,
  responded: { type: Boolean, default: false }

});

module.exports = recipientSchema;

