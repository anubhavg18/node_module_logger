import { BaseException } from './base-exception';
import { ApiError } from './model/api-error';
export declare class CustomException extends BaseException {
    error: ApiError;
    constructor(error: ApiError);
}
