import { Logger } from 'winston';
export declare class LoggingService {
    constructor();
    printFormat: (info: any) => string;
    getLogStyle: (logStyle: string) => any;
    getLogger: (moduleName: string) => Logger;
}
