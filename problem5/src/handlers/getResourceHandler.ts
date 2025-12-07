import { Request, Response } from 'express';
import getResourceDomain from '../domain/getResourceDomain';

async function getResourceHandler(
    req: Request,
    res: Response
)
{
    const { id } = req.params;
    const resource = await getResourceDomain(id);

    return res.status(resource.statusCode).json({
        message: resource.message,
        data: resource.data
    });
}

export default getResourceHandler;