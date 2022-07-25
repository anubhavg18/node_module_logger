import { createLogger, format, transports, Logger } from 'winston';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  constructor() { }

  printFormat = (info: any): string => {
    let result = `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;

    if (info.stack) {
      result = `${result}\n${info.stack}`;
    }

    return result;
  };

  getLogStyle = (logStyle: string): any => {
    if (logStyle === 'cli') {
      return format.combine(
        format.colorize({ all: true }),
        format.printf(this.printFormat),
      );
    } else {
      return format.combine(format.json());
    }
  };

  public getLogger = (moduleName: string): Logger => {
    return createLogger({
      level: 'info',
      format: format.combine(
        format.label({ label: moduleName }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        this.getLogStyle('cli'),
      ),
      defaultMeta: { service: 'Saudi Airlines Managed Services' },
      transports: [new transports.Console()],
    });
  };

}
