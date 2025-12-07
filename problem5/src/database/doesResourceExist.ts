import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function doesResourceExist(id: number): Promise<ResultType<boolean>>
{
    try
    {
        const result = await pool.query(
            `
            SELECT COUNT(id)
            FROM resources 
            WHERE id = $1;
            `,
            [id]
        );

        return Result.Success(result.rows[0].count > 0);
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default doesResourceExist;