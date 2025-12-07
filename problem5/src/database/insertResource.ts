import ResourceModel from './resourceModel';
import Result, { ResultType } from '../utils/ResultType';
import { pool } from './config';

async function insertResource(
    name: string,
    description: string
): Promise<ResultType<ResourceModel>>
{
    try
    {
        const result = await pool.query(
            `
            INSERT INTO resources (name, description)
            VALUES ($1, $2)
            RETURNING id, name, description, created_at, updated_at;
            `,
            [name, description]
        );

        return Result.Success(result.rows[0]);
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default insertResource;