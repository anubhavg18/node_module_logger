import { Injectable } from '@nestjs/common';
import { AzureService } from './azure.config.service';

@Injectable()
export class ConfigService {
  constructor(private azureService: AzureService) {}

  // Application
  configValues = {
    appName: this.azureService.getAzureConfigValue('appName'),
    appVersion: this.azureService.getAzureConfigValue('appVersion'),
    port: this.azureService.getAzureConfigValue('appid'),

    baseUrl: 'https://apim-sa-sandbox.azure-api.net/amadeus/',
    baseUrlKey: 'a77c1c8017f74251910fdf76155179f4',
  };

  getConfigConstantValue(keyName) {
    return this.configValues[keyName];
  }
}
