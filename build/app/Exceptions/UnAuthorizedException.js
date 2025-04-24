"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class UnAuthorizedException extends standalone_1.Exception {
    constructor(message = 'Unauthorized', status = 401, code = 'E_UNAUTHORIZED') {
        super(message, status, code);
    }
}
exports.default = UnAuthorizedException;
//# sourceMappingURL=UnAuthorizedException.js.map