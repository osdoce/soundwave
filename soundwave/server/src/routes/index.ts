import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import weatherRoutes from './weather-routes.js'
import { authenticateToken } from '../middleware/auth.js';
import { activityRouter } from './api/activity-routes.js';
import { tripRouter } from './api/trip-routes.js';

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes
// Define a middleware to authenticate incoming requests
router.use('/api', authenticateToken, apiRoutes); 
router.use('/api2', apiRoutes); 
//add the weather api
router.use('/weather', weatherRoutes);
router.use('/activities', activityRouter);
router.use('/trips', tripRouter);

export default router;
