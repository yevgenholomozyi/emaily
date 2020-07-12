
const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipients');

const surveySchema = new Schema({ // creating a schema for a collection item
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, // ref to the very particular user, underscore is required to set up a reletionship by convention
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema); // creating a new collection

