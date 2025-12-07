import updateResource from '../database/updateResource';
import BaseResponse, { BaseResponseType } from "../utils/BaseResponseType";
import HttpStatusCode from "../utils/HttpStatusCode";
import Result from '../utils/ResultType';
import isInt from '../validators/isInt';
import isNonEmptyString from '../validators/isNonEmptyString';
import isString from '../validators/isString';
import ResourceObject from './resourceObject';

async function updateResourceDomain(
    id: any,
    name: any,
    description: any
): Promise<BaseResponseType<ResourceObject>>
{
    const isValidId = isInt(id, 'Resource id must be an integer');

    const isValidName = isNonEmptyString(name, 'Resource name must be a non-empty string');

    const isValidDescription = description === null || description === undefined
        ? Result.Success<string>(description)
        : isString(description, 'Resource description if provided must be a string');

    const isValid = Result.AllErrors([
        isValidId,
        isValidName,
        isValidDescription
    ]);

    if (isValid.error)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, isValid.message);
    }

    const _id = isValidId.data;
    const _name = isValidName.data;
    const _description = isValidDescription.data;

    const resource = await updateResource(_id, _name, _description)

    if (resource.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while updating the resource');
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

export default updateResourceDomain;