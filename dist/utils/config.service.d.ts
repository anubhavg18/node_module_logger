import { AzureService } from './azure.config.service';
export declare class ConfigService {
    private azureService;
    constructor(azureService: AzureService);
    configValues: {
        appName: Promise<any>;
        appVersion: Promise<any>;
        port: Promise<any>;
        baseUrl: string;
        baseUrlKey: string;
    };
    getConfigConstantValue(keyName: any): any;
}
