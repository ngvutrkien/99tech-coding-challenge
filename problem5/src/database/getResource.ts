import ResourceModel from './resourceModel';
import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function getResource(id: number): Promise<ResultType<ResourceModel>>
{
    try
    {
        const result = await pool.query(
            `
            SELECT id, name, description, created_at, updated_at
            FROM resources 
            WHERE id = $1;
            `,
            [id]
        );

        return Result.Success(result.rows[0]);
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default getResource;