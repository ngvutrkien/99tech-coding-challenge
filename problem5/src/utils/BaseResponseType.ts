import HttpStatusCode from "./HttpStatusCode";

type BaseResponseType<T = any> = {
    statusCode: HttpStatusCode,
    message: string,
    data: T
}

class BaseResponse
{
    public static Success<T>(statusCode: HttpStatusCode, data: T = null as any): BaseResponseType<T>
    {
        return {
            statusCode,
            message: 'Ok',
            data
        };
    }

    public static Fail<T>(statusCode: HttpStatusCode, message: string = ""): BaseResponseType<T>
    {
        return {
            statusCode,
            message,
            data: null as any
        };
    }
}

export { BaseResponseType }
export default BaseResponse;