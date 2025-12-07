import getAllResources from '../database/getAllResources';
import countResources from '../database/countResources';
import BaseResponse, { BaseResponseType } from '../utils/BaseResponseType';
import HttpStatusCode from "../utils/HttpStatusCode";
import ResourceObject from './resourceObject';
import PaginatedResourceObject from './paginatedResourceObject';
import isBoolean from '../validators/isBoolean';
import Result from '../utils/ResultType';
import isInt from '../validators/isInt';

async function getAllResourcesDomain(
    archived: any,
    offset: any,
    limit: any
): Promise<BaseResponseType<PaginatedResourceObject>>
{
    const isValidParamArchived = archived === null || archived === undefined
        ? Result.Success<boolean>(archived)
        : isBoolean(archived, 'Param archived must be a boolean');

    const isValidParamOffset = offset === null || offset === undefined
        ? Result.Success<number>(offset)
        : isInt(offset, 'Param offset must be an integer');

    const isValidParamLimit = limit === null || limit === undefined
        ? Result.Success<number>(limit)
        : isInt(limit, 'Param limit must be an integer');

    const isValid = Result.AllErrors([
        isValidParamArchived,
        isValidParamOffset,
        isValidParamLimit]
    );

    if (isValid.error)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, isValid.message);
    }

    const _archived = isValidParamArchived.data ?? false;
    const _offset = isValidParamOffset.data ?? 0;
    const _limit = isValidParamLimit.data ?? 10;

    if (_limit > 100)
    {
        return BaseResponse.Fail(HttpStatusCode.BAD_REQUEST, 'Limit cannot exceed 100');
    }

    const resources = await getAllResources(_archived, _offset, _limit);

    if (resources.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while getting resources');
    }

    const total = await countResources(_archived);

    if (total.error)
    {
        return BaseResponse.Fail(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong while counting resources');
    }

    const resourceObjects = resources.data!.map(resource => ({
        id: resource.id,
        name: resource.name,
        description: resource.description,
        createdAt: resource.created_at,
        updatedAt: resource.updated_at,
        archived: resource.archived
    } as ResourceObject));

    return BaseResponse.Success(HttpStatusCode.OK, {
        data: resourceObjects,
        total: total.data!,
        offset: _offset,
        limit: _limit
    });
}

export default getAllResourcesDomain;