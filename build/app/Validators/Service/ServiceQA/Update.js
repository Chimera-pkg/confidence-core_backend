"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateServiceQAValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            question: Validator_1.schema.string.optional(),
            answer: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = UpdateServiceQAValidator;
//# sourceMappingURL=Update.js.map