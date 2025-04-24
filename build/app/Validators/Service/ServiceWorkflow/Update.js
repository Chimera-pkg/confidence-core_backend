"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateServiceWorkflowValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            seq: Validator_1.schema.number.optional(),
            title: Validator_1.schema.string.optional(),
            description: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = UpdateServiceWorkflowValidator;
//# sourceMappingURL=Update.js.map