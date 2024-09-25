import { Schema, model } from 'mongoose';

export const participantSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: String, required: true },
    queston: {
      type: String,
      required: true,
      enum: ['social', 'friends', 'myself'],
    },
    eventId: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Participant = model('participants', participantSchema);
