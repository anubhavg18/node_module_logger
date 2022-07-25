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
exports.ApiCallsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_service_1 = require("./config.service");
let ApiCallsService = class ApiCallsService {
    constructor(configservice) {
        this.configservice = configservice;
        this.getData = (config) => {
            if (config && config.headers) {
                config.headers['Ocp-Apim-Subscription-Key'] = this.configservice.getConfigConstantValue('baseUrlKey');
                config.headers['Ocp-Apim-Trace'] = true;
            }
            return (0, axios_1.default)(config)
                .then(function (response) {
                return response.data;
            })
                .catch(function (error) {
                throw error.response;
            });
        };
    }
};
ApiCallsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ApiCallsService);
exports.ApiCallsService = ApiCallsService;
//# sourceMappingURL=api-calls.service.js.map