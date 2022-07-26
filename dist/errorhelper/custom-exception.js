"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
const common_1 = require("@nestjs/common");
const base_exception_1 = require("./base-exception");
class CustomException extends base_exception_1.BaseException {
    constructor(error) {
        super(error, common_1.HttpStatus.BAD_REQUEST);
        this.error = error;
    }
}
exports.CustomException = CustomException;
//# sourceMappingURL=custom-exception.js.map