import { Event } from '../db/models/event.js';

export const getEvents = async () => {
  const events = Event.find();

  return events;
};
