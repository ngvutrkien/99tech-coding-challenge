import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function countResources(archived: boolean): Promise<ResultType<number>>
{
    try
    {
        const result = await pool.query(
            `
            SELECT COUNT(*) as total
            FROM resources
            WHERE archived = $1;
            `,
            [archived]
        );

        return Result.Success(parseInt(result.rows[0].total));
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default countResources;