import { HttpException } from '@nestjs/common';
import { ApiError } from './model/api-error';
export declare class BaseException extends HttpException {
    errors?: ApiError;
    statusCode?: number;
    constructor(errors?: ApiError, statusCode?: number);
    getErrorMessage(): ApiError;
    getStatusCode(): number;
}
