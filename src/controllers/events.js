import { getEvents } from '../services/events.js';

export const getEventsController = async (req, res) => {
  const events = await getEvents();

  res.status(200).json({
    status: 200,
    message: 'Successfully found events.',
    data: events,
  });
};
