import { Router } from 'express';
import createResourceHandler from '../handlers/createResourceHandler';
import getResourceHandler from '../handlers/getResourceHandler';
import getAllResourcesHandler from '../handlers/getAllResourcesHandler';
import updateResourceHandler from '../handlers/updateResourceHandler';
import deleteResourceHandler from '../handlers/deleteResourceHandler';

const resourcesRoutes = Router();

resourcesRoutes.post('/', createResourceHandler);
resourcesRoutes.get('/', getAllResourcesHandler);
resourcesRoutes.get('/:id', getResourceHandler);
resourcesRoutes.put('/:id', updateResourceHandler);
resourcesRoutes.delete('/:id', deleteResourceHandler);

export default resourcesRoutes;