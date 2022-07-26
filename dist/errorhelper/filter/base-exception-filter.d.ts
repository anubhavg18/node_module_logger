import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response, Request } from 'express';
import { BaseException } from '../base-exception';
export declare abstract class BaseExceptionFilter implements ExceptionFilter {
    abstract catch(exception: BaseException, host: ArgumentsHost): any;
    protected getHttpContext(host: ArgumentsHost): HttpArgumentsHost;
    protected getResponse(httpContext: HttpArgumentsHost): Response;
    protected getRequest(httpContext: HttpArgumentsHost): Request;
    protected writeToClient(host: ArgumentsHost, exception: BaseException): void;
}
