import HttpStatusCode from "../utils/HttpStatusCode";
import BaseResponse, { BaseResponseType } from "../utils/BaseResponseType";
import ResourceObject from './resourceObject';
import isString from '../validators/isString';
import Result from '../utils/ResultType';
import isNonEmptyString from '../validators/isNonEmptyString';
import insertResource from "../database/insertResource";

async function createResourceDomain(
    name: any,
    description: any
): Promise<BaseResponseType<ResourceObject>>
{
    const isValidName = isNonEmptyString(name, 'Resource name must be a non-empty string');

    const isValidDescription = description === null || description === undefined
        ? Result.Success<string>(description)
        : isString(description, 'Resource description if provided must be a string');

    const isValid = Result.AllErrors([
        isValidName,
        isValidDescription
    ]);

    if (isValid.error)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, isValid.message);
    }

    const _name = isValidName.data;
    const _description = isValidDescription.data;

    const resource = await insertResource(_name, _description);

    if (resource.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while creating the resource');
    }

    return BaseResponse.Success(HttpStatusCode.CREATED, {
        id: resource.data!.id,
        name: resource.data!.name,
        description: resource.data!.description,
        createdAt: resource.data!.created_at,
        updatedAt: resource.data!.updated_at,
        archived: resource.data!.archived
    } as ResourceObject);
}

export default createResourceDomain;