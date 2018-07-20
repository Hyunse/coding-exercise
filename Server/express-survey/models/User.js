import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);