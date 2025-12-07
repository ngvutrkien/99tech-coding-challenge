import doesResourceExist from '../database/doesResourceExist';
import deleteResource from '../database/deleteResource';
import BaseResponse, { BaseResponseType } from "../utils/BaseResponseType";
import HttpStatusCode from "../utils/HttpStatusCode";
import isInt from '../validators/isInt';

async function deleteResourceDomain(id: any): Promise<BaseResponseType>
{
    const isValidId = isInt(id, 'Resource id must be an integer');

    if (isValidId.error)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, isValidId.message);
    }

    const _id = isValidId.data;

    const exists = await doesResourceExist(_id)

    if (exists.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while checking for the resource existence');
    }

    if (!exists.data)
    {
        return BaseResponse.Fail(HttpStatusCode.NOT_FOUND, 'Resource does not exist');
    }

    const resource = await deleteResource(_id);

    if (resource.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while deleting the resource');
    }

    return BaseResponse.Success(HttpStatusCode.NO_CONTENT, null);
}

export default deleteResourceDomain;