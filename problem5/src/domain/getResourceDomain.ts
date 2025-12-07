import getResource from '../database/getResource';
import doesResourceExist from '../database/doesResourceExist';
import BaseResponse, { BaseResponseType } from '../utils/BaseResponseType';
import HttpStatusCode from "../utils/HttpStatusCode";
import ResourceObject from './resourceObject';
import isInt from '../validators/isInt';

async function getResourceDomain(id: any): Promise<BaseResponseType<ResourceObject>>
{
    const isValidId = isInt(id, 'Resource id must be an integer');

    if (isValidId.error)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, isValidId.message);
    }

    const _id = isValidId.data;

    const exists = await doesResourceExist(_id);

    if (exists.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while checking for the resource existence');
    }

    if (!exists.data)
    {
        return BaseResponse.Fail(HttpStatusCode.NOT_FOUND, 'Resource does not exist');
    }

    const resource = await getResource(_id);

    if (resource.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while getting resource');
    }

    return BaseResponse.Success(HttpStatusCode.OK, {
        id: resource.data!.id,
        name: resource.data!.name,
        description: resource.data!.description,
        createdAt: resource.data!.created_at,
        updatedAt: resource.data!.updated_at,
        archived: resource.data!.archived
    } as ResourceObject);
}

export default getResourceDomain;