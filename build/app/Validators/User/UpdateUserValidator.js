"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const User_1 = global[Symbol.for('ioc.use')]("App/Models/User");
class UpdateUserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            email: Validator_1.schema.string.optional(),
            username: Validator_1.schema.string.optional(),
            password: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(8)]),
            role: Validator_1.schema.enum.optional([User_1.UserRole.manufacturer, User_1.UserRole.healthcare]),
        });
        this.messages = {};
    }
}
exports.default = UpdateUserValidator;
//# sourceMappingURL=UpdateUserValidator.js.map