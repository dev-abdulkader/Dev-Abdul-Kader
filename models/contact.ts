import mongoose, { Schema, models, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Contact || model('Contact', ContactSchema);
