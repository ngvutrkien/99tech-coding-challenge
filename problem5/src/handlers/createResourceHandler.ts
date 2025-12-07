import { Request, Response } from 'express';
import createResourceDomain from '../domain/createResourceDomain';

async function createResourceHandler(
    req: Request,
    res: Response
)
{
    const { name, description } = req.body;
    
    const resource = await createResourceDomain(name, description);

    return res.status(resource.statusCode).json({
        message: resource.message,
        data: resource.data
    });
}

export default createResourceHandler;