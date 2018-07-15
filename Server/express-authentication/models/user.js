const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
});

// Create Model Class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
