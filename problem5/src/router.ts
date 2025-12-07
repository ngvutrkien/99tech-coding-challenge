import { Router } from 'express';
import resourcesRoutes from './routes/resourcesRoutes';

const router = Router();

router.use('/resources', resourcesRoutes);

export default router;