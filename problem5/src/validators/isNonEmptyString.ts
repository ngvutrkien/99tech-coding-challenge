import Result, { ResultType } from "../utils/ResultType";

function isNonEmptyString(input: any, message: string): ResultType<string>
{
    switch (typeof input)
    {
        case 'string':
            const trimmed = input.trim();
            return trimmed.length > 0 ? Result.Success(trimmed) : Result.Fail(message);
        default:
            return Result.Fail(message);
    }
}

export default isNonEmptyString;