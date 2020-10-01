import { Schema } from 'mongoose';

const recipientSchema = new Schema({
  email: String,
  responed: { type: Boolean, default: false }
});

export default recipientSchema;