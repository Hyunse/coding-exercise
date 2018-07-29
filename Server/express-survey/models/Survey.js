import mongoose, { Schema } from 'mongoose';
import RecipientSchema from './Recipient';

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},
});

mongoose.model('surveys', surveySchema);