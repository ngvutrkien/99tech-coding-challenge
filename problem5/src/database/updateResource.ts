import ResourceModel from './resourceModel';
import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function updateResource(
    id: number,
    name: string,
    description: string
): Promise<ResultType<ResourceModel>>
{
    try
    {
        const result = await pool.query(
            `
            UPDATE resources
            SET name = $2, description = $3, updated_at = CURRENT_TIMESTAMP
            WHERE id = $1
            RETURNING id, name, description, created_at, updated_at;
            `,
            [id, name, description]
        );

        return Result.Success(result.rows[0]);
    }
    catch (error: any)
    {
        return Result.Fail(error.message);
    }
}

export default updateResource;