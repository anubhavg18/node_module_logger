import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseException } from '../base-exception';
import { BaseExceptionFilter } from './base-exception-filter';

@Catch(BaseException)
export class HttpExceptionErrorFilter extends BaseExceptionFilter {
  catch(exception: BaseException, host: ArgumentsHost) {
    this.writeToClient(host, exception);
  }
}
