"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class EmailNotRegisteredException extends standalone_1.Exception {
    constructor(message = 'Email is not registered') {
        super(message, 400, 'E_EMAIL_NOT_REGISTERED');
    }
}
exports.default = EmailNotRegisteredException;
//# sourceMappingURL=EmailNotRegisteredException.js.map