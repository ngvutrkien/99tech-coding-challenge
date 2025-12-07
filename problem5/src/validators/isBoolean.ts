import Result, { ResultType } from "../utils/ResultType";

function isBoolean(input: any, message: string): ResultType<boolean>
{
    switch (typeof input)
    {
        case 'boolean':
            return Result.Success(input);
        case 'string':
            const lowerInput = input.toLowerCase();
            return lowerInput === 'true' || lowerInput === 'false' ? Result.Success(lowerInput === 'true') : Result.Fail(message);
        default:
            return Result.Fail(message);
    }
}

export default isBoolean;