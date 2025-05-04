"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class NotFoundException extends standalone_1.Exception {
    constructor(message = 'Not Found', status = 404, code = 'E_NOT_FOUND') {
        super(message, status, code);
    }
}
exports.default = NotFoundException;
//# sourceMappingURL=NotFoundException.js.map