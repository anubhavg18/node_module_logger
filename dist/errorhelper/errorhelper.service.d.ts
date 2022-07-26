import { ApiError } from './model/api-error';
export declare class ErrorHelperService {
    static getErrorByType(type: string): {
        status: any;
        error: {
            error: ApiError;
        };
    };
}
