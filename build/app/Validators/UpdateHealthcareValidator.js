"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateHealthcareValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            description: Validator_1.schema.string.optional(),
            industry_category_id: Validator_1.schema.number.optional(),
            country_id: Validator_1.schema.number.optional(),
            address: Validator_1.schema.string.optional(),
            current_password: Validator_1.schema.string.optional(),
            new_password: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(8)]),
            confirm_new_password: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(8)]),
        });
        this.messages = {};
    }
}
exports.default = UpdateHealthcareValidator;
//# sourceMappingURL=UpdateHealthcareValidator.js.map