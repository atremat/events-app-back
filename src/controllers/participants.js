import { getParticipants } from '../services/participants.js';

export const getParticipantsController = async (req, res) => {
  const participants = await getParticipants();

  res.status(200).json({
    status: 200,
    message: 'Successfully found participants.',
    data: participants,
  });
};
