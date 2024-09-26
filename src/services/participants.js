import { Participant } from '../db/models/participant.js';

export const getParticipants = async () => {
  const participants = Participant.find();

  return participants;
};

export const createParticipant = async (payload) => {
  console.log('payload: ', payload);

  const participant = await Participant.create(payload);
  console.log('participant: ', participant);

  return participant;
};
