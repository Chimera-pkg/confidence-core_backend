"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateProductClinicalApplicationValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            content: Validator_1.schema.string(),
        });
        this.messages = {};
    }
}
exports.default = CreateProductClinicalApplicationValidator;
//# sourceMappingURL=CreateProductClinicalApplicationValidator.js.map