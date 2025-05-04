"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateProductComparisonValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            comp_product_id: Validator_1.schema.number(),
            specs: Validator_1.schema.array().members(Validator_1.schema.object().members({
                origin_spec_id: Validator_1.schema.number(),
                comp_spec_id: Validator_1.schema.number(),
            })),
        });
        this.messages = {};
    }
}
exports.default = CreateProductComparisonValidator;
//# sourceMappingURL=Create.js.map