import { Injectable, HttpException, HttpStatus, } from '@nestjs/common';
const appConfig = require("@azure/app-configuration");


@Injectable()
export class AzureService {
    constructor() { }

    async getAzureConfigValue(keyId: string) {
        try {
            const client = new appConfig.AppConfigurationClient(
                "Endpoint=https://sasandboxappconfig.azconfig.io;Id=GpYT-l9-s0:WZExNWbjYLAxe2ep1XW3;Secret=EsUOGJm+GTGtGYHKBQD1zGGA4XBZz/jy5EZe5ibkCVE="
            )
            const settingValue = await client.getConfigurationSetting({ key: keyId });
            return settingValue.value;
        } catch (response) {
            return undefined
        };

    }
}
