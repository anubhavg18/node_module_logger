"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseExceptionFilter = void 0;
const base_exception_1 = require("../base-exception");
class BaseExceptionFilter {
    getHttpContext(host) {
        return host.switchToHttp();
    }
    getResponse(httpContext) {
        return httpContext.getResponse();
    }
    getRequest(httpContext) {
        return httpContext.getRequest();
    }
    writeToClient(host, exception) {
        const ctx = this.getHttpContext(host);
        if (exception instanceof base_exception_1.BaseException) {
            this.getResponse(ctx)
                .status(exception.statusCode)
                .json({
                error: exception.getErrorMessage(),
                path: this.getRequest(ctx).url,
            });
        }
        else {
            const httpException = exception;
            this.getResponse(ctx)
                .status(500)
                .json({
                messerrorage: 'unhandled exception',
                path: this.getRequest(ctx).url,
            });
        }
    }
}
exports.BaseExceptionFilter = BaseExceptionFilter;
//# sourceMappingURL=base-exception-filter.js.map