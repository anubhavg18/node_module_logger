"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LoggerService = exports.LoggerModule = void 0;
const logger_module_1 = require("./logger/logger.module");
Object.defineProperty(exports, "LoggerModule", { enumerable: true, get: function () { return logger_module_1.LoggerModule; } });
const logger_service_1 = require("./logger/logger.service");
Object.defineProperty(exports, "LoggerService", { enumerable: true, get: function () { return logger_service_1.LoggerService; } });
const logger_decorator_1 = require("./logger/logger.decorator");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_decorator_1.Logger; } });
//# sourceMappingURL=index.js.map