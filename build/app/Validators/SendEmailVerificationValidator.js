"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SendEmailVerificationValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.email()]),
        });
        this.messages = {};
    }
}
exports.default = SendEmailVerificationValidator;
//# sourceMappingURL=SendEmailVerificationValidator.js.map