import { ConfigService } from './config.service';
export declare class ApiCallsService {
    private configservice;
    constructor(configservice: ConfigService);
    getData: (config: any) => Promise<any>;
}
