import { Schema, model } from 'mongoose';

export const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: String, required: true },
    organizer: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Event = model('event', eventSchema);
