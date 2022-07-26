import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class OpenApiExceptionFilter implements ExceptionFilter {
    catch(errors: ValidationError, host: ArgumentsHost): void;
    private transformError;
}
interface ValidationError {
    status: number;
    message: string;
    errors: Array<{
        path: string;
        message: string;
        error_code?: string;
    }>;
    path?: string;
    name: string;
    headers: {
        [header: string]: string;
    };
}
export {};
