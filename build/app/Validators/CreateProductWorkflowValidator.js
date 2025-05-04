"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateProductWorkflowValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            seq: Validator_1.schema.number(),
            title: Validator_1.schema.string(),
            description: Validator_1.schema.string(),
        });
        this.messages = {};
    }
}
exports.default = CreateProductWorkflowValidator;
//# sourceMappingURL=CreateProductWorkflowValidator.js.map