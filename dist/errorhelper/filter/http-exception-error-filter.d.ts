import { ArgumentsHost } from '@nestjs/common';
import { BaseException } from '../base-exception';
import { BaseExceptionFilter } from './base-exception-filter';
export declare class HttpExceptionErrorFilter extends BaseExceptionFilter {
    catch(exception: BaseException, host: ArgumentsHost): void;
}
