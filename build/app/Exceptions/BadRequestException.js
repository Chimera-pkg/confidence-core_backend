"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class BadRequestException extends standalone_1.Exception {
    constructor(message = 'Bad Request', status = 400, code = 'E_BAD_REQUEST') {
        super(message, status, code);
    }
}
exports.default = BadRequestException;
//# sourceMappingURL=BadRequestException.js.map