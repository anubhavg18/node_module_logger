"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
let LoggerService = class LoggerService {
    constructor() {
        this.log = () => {
            let loggerObject = (0, winston_1.createLogger)({
                format: winston_1.format.combine(winston_1.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), this.getLogStyle('cli')),
                defaultMeta: { service: 'Saudia Airlines Managed Services' },
                transports: [new winston_1.transports.Console()],
            });
            return loggerObject;
        };
        this.logInfo = (message) => {
            let loggerObject = this.log();
            return loggerObject.info(message);
        };
        this.logError = (message) => {
            let loggerObject = this.log();
            return loggerObject.error(message);
        };
        this.logWarning = (message) => {
            let loggerObject = this.log();
            return loggerObject.warn(message);
        };
        this.printFormat = (info) => {
            let result = `${info.timestamp} ${info.level} [${this.prefix}]: ${info.message}`;
            if (info.stack) {
                result = `${result}\n${info.stack}`;
            }
            return result;
        };
        this.getLogStyle = (logStyle) => {
            if (logStyle === 'cli') {
                return winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.printf(this.printFormat));
            }
            else {
                return winston_1.format.combine(winston_1.format.json());
            }
        };
    }
    setPrefix(prefix) {
        this.prefix = prefix;
    }
};
LoggerService = __decorate([
    (0, common_1.Injectable)({
        scope: common_1.Scope.TRANSIENT,
    })
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map