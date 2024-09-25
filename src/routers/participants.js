import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getParticipantsController } from '../controllers/participants.js';

const router = Router();

router.get('/', ctrlWrapper(getParticipantsController));

export default router;
