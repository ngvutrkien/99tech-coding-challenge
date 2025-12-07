import { Request, Response } from 'express';
import updateResourceDomain from '../domain/updateResourceDomain';

async function updateResourceHandler(
    req: Request,
    res: Response
)
{
    const { id } = req.params;
    const { name, description } = req.body;
    const resource = await updateResourceDomain(id, name, description);

    return res.status(resource.statusCode).json({
        message: resource.message,
        data: resource.data
    });
}

export default updateResourceHandler;