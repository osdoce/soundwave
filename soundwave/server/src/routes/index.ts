import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import weatherRoutes from './weather-routes.js'
import { authenticateToken } from '../middleware/auth.js';
import { ticketRouter } from './api/ticket-routes.js';

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes
// Define a middleware to authenticate incoming requests
router.use('/api', authenticateToken, apiRoutes); 
//add the weather api
router.use('/weather', weatherRoutes);
router.use('/tickets', ticketRouter);

export default router;
