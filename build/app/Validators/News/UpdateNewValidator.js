"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateNewsValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string.optional(),
            content: Validator_1.schema.string.optional(),
            is_published: Validator_1.schema.boolean.optional(),
        });
        this.messages = {};
    }
}
exports.default = UpdateNewsValidator;
//# sourceMappingURL=UpdateNewValidator.js.map