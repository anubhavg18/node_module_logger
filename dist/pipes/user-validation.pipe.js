"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class UserValidationPipe {
    constructor() {
        this.allowedNameLength = 5;
        this.allowedCharLength = 50;
    }
    transform(value) {
        const username = value.username.toUpperCase();
        const description = value.description.toUpperCase();
        console.log('value:', value);
        if (!this.userNameValidation(username)) {
            throw new common_1.BadRequestException(`"${username}": Length of username is greater than 5`);
        }
        if (!this.isLengthLess50(description)) {
            throw new common_1.BadRequestException(`Description length is greater than 50`);
        }
        return value;
    }
    isLengthLess50(description) {
        const lengthDesc = description.length;
        console.log('lengthDesc 1:', lengthDesc);
        if (lengthDesc > this.allowedCharLength)
            return false;
        console.log('description.length:', description.length);
        console.log('lengthDesc:', lengthDesc);
        return true;
    }
    userNameValidation(username) {
        if (username.length > this.allowedNameLength)
            return false;
        return true;
    }
}
exports.UserValidationPipe = UserValidationPipe;
//# sourceMappingURL=user-validation.pipe.js.map