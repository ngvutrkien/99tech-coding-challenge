import { Request, Response } from 'express';
import getAllResourcesDomain from '../domain/getAllResourcesDomain';

async function getAllResourcesHandler(
    req: Request,
    res: Response
)
{
    const { archived, offset, limit } = req.query;
    const resources = await getAllResourcesDomain(archived, offset, limit);

    return res.status(resources.statusCode).json({
        message: resources.message,
        data: resources.data
    });
}

export default getAllResourcesHandler;