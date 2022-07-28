"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const azure_config_service_1 = require("./azure.config.service");
let ConfigService = class ConfigService {
    constructor(azureService) {
        this.azureService = azureService;
        this.configValues = {
            appName: this.azureService.getAzureConfigValue('appName'),
            appVersion: this.azureService.getAzureConfigValue('appVersion'),
            port: this.azureService.getAzureConfigValue('appid'),
            baseUrl: 'https://apim-sa-sandbox.azure-api.net/amadeus/',
            baseUrlKey: 'a77c1c8017f74251910fdf76155179f4',
        };
    }
    getConfigConstantValue(keyName) {
        return this.configValues[keyName];
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [azure_config_service_1.AzureService])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map