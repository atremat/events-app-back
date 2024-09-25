import { Participant } from '../db/models/participant.js';

export const getParticipants = async () => {
  const participants = Participant.find();

  return participants;
};
