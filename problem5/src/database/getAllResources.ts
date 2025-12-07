import ResourceModel from './resourceModel';
import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function getAllResources(
    archived: boolean,
    offset: number,
    limit: number
): Promise<ResultType<Array<ResourceModel>>>
{
    try
    {
        const result = await pool.query(
            `
            SELECT id, name, description, archived, created_at, updated_at
            FROM resources
            WHERE archived = $1
            ORDER BY created_at DESC
            LIMIT $2 OFFSET $3;
            `,
            [archived, limit, offset]
        );
        return Result.Success(result.rows);
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default getAllResources;