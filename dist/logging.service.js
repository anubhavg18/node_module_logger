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
exports.LoggingService = void 0;
const winston_1 = require("winston");
const config = require("./config");
const common_1 = require("@nestjs/common");
let LoggingService = class LoggingService {
    constructor() {
        this.printFormat = (info) => {
            let result = `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;
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
        this.getLogger = (moduleName) => {
            return (0, winston_1.createLogger)({
                level: config.loggerLogLevel,
                format: winston_1.format.combine(winston_1.format.label({ label: moduleName }), winston_1.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), this.getLogStyle(config.loggerLogStyle)),
                defaultMeta: { service: config.appName },
                transports: [new winston_1.transports.Console()],
            });
        };
    }
};
LoggingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggingService);
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.service.js.map