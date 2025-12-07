type ResultType<T = any> = {
    error: boolean,
    message: string,
    data: T
}

class Result
{
    public static Success<T>(data: T = null as any): ResultType<T>
    {
        return {
            error: false,
            message: 'Ok',
            data
        };
    }

    public static Fail<T>(message: string = ""): ResultType<T>
    {
        return {
            error: true,
            message,
            data: null as any
        };
    }

    public static AllErrors(results: Array<ResultType>): ResultType
    {
        const messages = results.filter(r => r.error).map(r => r.message);

        if (messages.length > 0)
        {
            return Result.Fail(messages.join('; '));
        }

        return Result.Success();
    }
}

export { ResultType }
export default Result;