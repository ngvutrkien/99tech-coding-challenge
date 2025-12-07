import Result, { ResultType } from "../utils/ResultType";
import { pool } from './config';

async function deleteResource(id: number): Promise<ResultType>
{
    try
    {
        const result = await pool.query(
            `
            UPDATE resources
            SET archived = $2
            WHERE id = $1;
            `,
            [id, true]
        );

        return Result.Success();
    }
    catch (error: any)
    {
        console.error(error);
        return Result.Fail(error.message);
    }
}

export default deleteResource;