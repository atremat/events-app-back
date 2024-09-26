import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createParticipantController,
  getParticipantsController,
} from '../controllers/participants.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createParticipantSchema } from '../validation/participant.js';

const router = Router();

router.get('/', ctrlWrapper(getParticipantsController));

router.post(
  '/',
  validateBody(createParticipantSchema),
  ctrlWrapper(createParticipantController),
);

export default router;
