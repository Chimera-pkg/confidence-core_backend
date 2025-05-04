"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateGovAffairValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string(),
            content: Validator_1.schema.string(),
            country_id: Validator_1.schema.number(),
            is_published: Validator_1.schema.boolean(),
        });
        this.messages = {};
    }
}
exports.default = UpdateGovAffairValidator;
//# sourceMappingURL=UpdateGovAffairValidator.js.map