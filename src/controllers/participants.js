import {
  createParticipant,
  getParticipants,
} from '../services/participants.js';

export const getParticipantsController = async (req, res) => {
  const participants = await getParticipants();

  res.status(200).json({
    status: 200,
    message: 'Successfully found participants.',
    data: participants,
  });
};

export const createParticipantController = async (req, res) => {
  const participant = await createParticipant({ ...req.body });

  res.status(201).json({
    status: 201,
    message: `Successfully created participant!`,
    data: participant,
  });
};
