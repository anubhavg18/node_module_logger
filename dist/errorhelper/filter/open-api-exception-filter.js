"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const express_openapi_validator_1 = require("express-openapi-validator");
const api_error_1 = require("../model/api-error");
let OpenApiExceptionFilter = class OpenApiExceptionFilter {
    catch(errors, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const data = this.transformError(errors);
        response.status(errors.status).header(errors.headers).json({
            error: data,
        });
    }
    transformError(errorObj) {
        const messageStr = errorObj.errors[0].path;
        let errorMessage = '';
        let errorTarget = '';
        const cause = messageStr.startsWith('.query', 0);
        if (cause) {
            errorMessage = 'Query parameters are not valid';
            errorTarget = 'Query';
        }
        else if (messageStr.startsWith('.schema', 0)) {
            errorMessage = 'Schema structure is not valid';
            errorTarget = 'Schema';
        }
        else {
            errorMessage = 'Something went wrong';
            errorTarget = '';
        }
        const errRespObj = new api_error_1.ApiError('badargument', errorMessage, errorTarget);
        if (errorObj.errors && errorObj.errors.length > 0) {
            const allErros = errorObj.errors;
            errRespObj.details = allErros.map((item) => {
                let container = {};
                const code = 'request' + item.path;
                const target = item.path;
                const message = item.message;
                return (container = Object.assign(Object.assign({}, container), { code, target, message }));
            });
        }
        return errRespObj;
    }
};
OpenApiExceptionFilter = __decorate([
    (0, common_1.Catch)(...Object.values(express_openapi_validator_1.error))
], OpenApiExceptionFilter);
exports.OpenApiExceptionFilter = OpenApiExceptionFilter;
//# sourceMappingURL=open-api-exception-filter.js.map