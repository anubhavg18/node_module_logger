"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHelperService = void 0;
const api_error_1 = require("./model/api-error");
const errorConfig = require("../config/error-file");
class ErrorHelperService {
    static getErrorByType(type) {
        const err = errorConfig[type];
        return {
            status: err.httpStatus,
            error: {
                error: new api_error_1.ApiError(err.exceptionCode, err.message, err.target),
            },
        };
    }
}
exports.ErrorHelperService = ErrorHelperService;
//# sourceMappingURL=errorhelper.service.js.map