import { Router } from 'express';
//import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { activityRouter } from './activity-routes.js';
import { tripRouter } from './trip-routes.js';

const router = Router();

router.use('/activities', activityRouter);
router.use('/trips', tripRouter);
router.use('/users', userRouter);

export default router;
