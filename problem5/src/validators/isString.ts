import Result, { ResultType } from "../utils/ResultType";

function isString(input: any, message: string): ResultType<string>
{
    switch (typeof input)
    {
        case 'string':
            const trimmed = input.trim();
            return Result.Success(trimmed);
        default:
            return Result.Fail(message);
    }
}

export default isString;