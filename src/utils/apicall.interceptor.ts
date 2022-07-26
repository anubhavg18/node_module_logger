import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { getLogger } from './logging.service';
const logger = getLogger('axios interceptor');


@Injectable()
export class ApicallInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    logger.info('Before reaching the handler');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => logger.info(`Response Lag...${Date.now() - now}ms`))
    );
  }
}