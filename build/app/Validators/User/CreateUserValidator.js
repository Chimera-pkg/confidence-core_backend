"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const User_1 = global[Symbol.for('ioc.use')]("App/Models/User");
class CreateUserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string(),
            email: Validator_1.schema.string(),
            username: Validator_1.schema.string(),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)]),
            role: Validator_1.schema.enum([User_1.UserRole.manufacturer, User_1.UserRole.healthcare]),
            logo: Validator_1.schema.file({
                size: '1mb',
                extnames: ['jpg', 'jpeg', 'png', 'webp'],
            }),
        });
        this.messages = {};
    }
}
exports.default = CreateUserValidator;
//# sourceMappingURL=CreateUserValidator.js.map