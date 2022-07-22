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
exports.AzureService = void 0;
const common_1 = require("@nestjs/common");
const appConfig = require("@azure/app-configuration");
let AzureService = class AzureService {
    constructor() { }
    async getAzureConfigValue(keyId) {
        try {
            const client = new appConfig.AppConfigurationClient("Endpoint=https://sasandboxappconfig.azconfig.io;Id=GpYT-l9-s0:WZExNWbjYLAxe2ep1XW3;Secret=EsUOGJm+GTGtGYHKBQD1zGGA4XBZz/jy5EZe5ibkCVE=");
            const settingValue = await client.getConfigurationSetting({ key: keyId });
            return settingValue.value;
        }
        catch (response) {
            return undefined;
        }
        ;
    }
};
AzureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AzureService);
exports.AzureService = AzureService;
//# sourceMappingURL=azure.config.service.js.map