import { Logger } from 'winston';
export declare class LoggerService {
    private prefix?;
    log: () => Logger;
    logInfo: (message: any) => Logger;
    logError: (message: any) => Logger;
    logWarning: (message: any) => Logger;
    printFormat: (info: any) => string;
    getLogStyle: (logStyle: string) => any;
    setPrefix(prefix: string): void;
}
