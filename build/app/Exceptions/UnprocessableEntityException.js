"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class UnprocessableEntityException extends standalone_1.Exception {
    constructor(message = 'Unprocessable Entity', errors = [], status = 422, code = 'E_UNPROCESSABLE_ENTITY') {
        super(message, status, code);
        this.errors = errors;
        this.message = message;
    }
    async handle(error, ctx) {
        if (process.env.NODE_ENV === 'development') {
            ctx.response.status(error.status).send({
                message: error.message,
                errors: error.errors,
                stack: error.stack,
                code: error.code,
            });
            return;
        }
        ctx.response.status(error.status).json({
            message: error.message,
            errors: error.errors,
        });
    }
}
exports.default = UnprocessableEntityException;
//# sourceMappingURL=UnprocessableEntityException.js.map