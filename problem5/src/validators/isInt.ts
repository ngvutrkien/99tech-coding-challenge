import Result, { ResultType } from "../utils/ResultType";

function isInt(input: any, message: string): ResultType<number>
{
    switch (typeof input)
    {
        case 'number':
            return Number.isInteger(input) ? Result.Success(input) : Result.Fail(message);
        case 'string':
            const parsed = Number.parseInt(input, 10);
            return Number.isInteger(parsed) ? Result.Success(parsed) : Result.Fail(message);

        default:
            return Result.Fail(message);
    }


    if (Number.isInteger(input))
    {
        return Result.Success();
    }

    return Result.Fail(message);
}

export default isInt;