"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const HttpExceptionHandler_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HttpExceptionHandler"));
class ExceptionHandler extends HttpExceptionHandler_1.default {
    constructor() {
        super(Logger_1.default);
    }
    async handle(error, ctx) {
        if (error.code === 'E_VALIDATION_FAILURE') {
            return ctx.response.status(error.status).send({
                message: error.message,
                errors: error?.messages?.errors,
            });
        }
        if (error.code === 'E_UNAUTHORIZED_ACCESS') {
            return ctx.response.status(error.status).send({
                message: error.message,
                errors: [
                    {
                        message: error.message,
                    },
                ],
            });
        }
        if (error.code === 'E_INVALID_AUTH_PASSWORD') {
            return ctx.response.status(error.status).send({
                message: error.message,
                errors: [
                    {
                        message: error.message,
                    },
                ],
            });
        }
        return super.handle(error, ctx);
    }
}
exports.default = ExceptionHandler;
//# sourceMappingURL=Handler.js.map