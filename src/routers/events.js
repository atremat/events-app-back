import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getEventsController } from '../controllers/events.js';

const router = Router();

router.get('/', ctrlWrapper(getEventsController));

export default router;
