import Joi from 'joi';

export const createParticipantSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  birthDate: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  eventId: Joi.string().required(),
  question: Joi.string().valid('social', 'friends', 'myself'),
});
