import { Injectable, Scope } from '@nestjs/common';
import { createLogger, format, transports, Logger } from 'winston';

@Injectable({
    scope: Scope.TRANSIENT,
})
export class LoggerService {
    private prefix?: string;

    log = (): Logger => {
        let loggerObject = createLogger({
            // level: 'info',           //For reference
            format: format.combine(
                // format.label({ label: moduleName }),            //For reference
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }),
                format.errors({ stack: true }),
                format.splat(),
                this.getLogStyle('cli'),
            ),
            defaultMeta: { service: 'Saudia Airlines Managed Services' },
            transports: [new transports.Console()],
        });
        return loggerObject
    };

    logInfo = (message) => {
        let loggerObject = this.log();
        return loggerObject.info(message)
    }
    logError = (message) => {
        let loggerObject = this.log();
        return loggerObject.error(message)
    }
    logWarning = (message) => {
        let loggerObject = this.log();
        return loggerObject.warn(message)
    }

    printFormat = (info: any): string => {
        // let result = `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;         //For reference
        let result = `${info.timestamp} ${info.level} [${this.prefix}]: ${info.message}`;

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

    setPrefix(prefix: string) {
        this.prefix = prefix;
    }
}