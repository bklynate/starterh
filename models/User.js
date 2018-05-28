const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  displayName: String,
  medications: []
});

mongoose.model('users', userSchema);
