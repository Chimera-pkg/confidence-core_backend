"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class RegisterHealthcareValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.email({ sanitize: true })]),
            username: Validator_1.schema.string(),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)]),
        });
        this.messages = {};
    }
}
exports.default = RegisterHealthcareValidator;
//# sourceMappingURL=RegisterHealthcareValidator.js.map