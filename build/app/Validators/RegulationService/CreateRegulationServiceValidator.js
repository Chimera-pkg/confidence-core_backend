"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateRegulationServiceValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string(),
            content: Validator_1.schema.string(),
            is_published: Validator_1.schema.boolean(),
            category_id: Validator_1.schema.number(),
            country_id: Validator_1.schema.number(),
            image: Validator_1.schema.file({
                size: '1mb',
                extnames: ['jpg', 'jpeg', 'png', 'webp'],
            }),
        });
        this.messages = {};
    }
}
exports.default = CreateRegulationServiceValidator;
//# sourceMappingURL=CreateRegulationServiceValidator.js.map