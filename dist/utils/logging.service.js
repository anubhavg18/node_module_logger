"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.getLogger = void 0;
const winston_1 = require("winston");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return winston_1.Logger; } });
const config = require("../config/config");
const printFormat = (info) => {
    let result = `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;
    if (info.stack) {
        result = `${result}\n${info.stack}`;
    }
    return result;
};
const getLogStyle = (logStyle) => {
    if (logStyle === 'cli') {
        return winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.printf(printFormat));
    }
    else {
        return winston_1.format.combine(winston_1.format.json());
    }
};
const getLogger = (moduleName) => {
    return (0, winston_1.createLogger)({
        level: config.loggerLogLevel,
        format: winston_1.format.combine(winston_1.format.label({ label: moduleName }), winston_1.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), getLogStyle(config.loggerLogStyle)),
        defaultMeta: { service: config.appName },
        transports: [new winston_1.transports.Console()],
    });
};
exports.getLogger = getLogger;
//# sourceMappingURL=logging.service.js.map