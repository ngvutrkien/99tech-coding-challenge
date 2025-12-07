import { Request, Response } from 'express';
import deleteResourceDomain from '../domain/deleteResourceDomain';

async function deleteResourceHandler(
    req: Request,
    res: Response
)
{
    const { id } = req.params;
    
    const resource = await deleteResourceDomain(id);

    return res.status(resource.statusCode).json({
        message: resource.message,
        data: resource.data
    });
}

export default deleteResourceHandler;