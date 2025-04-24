"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateGovAffairValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string(),
            content: Validator_1.schema.string(),
            country_id: Validator_1.schema.number(),
            is_published: Validator_1.schema.boolean(),
            image: Validator_1.schema.file({
                size: '1mb',
                extnames: ['jpg', 'jpeg', 'png', 'webp'],
            }),
        });
        this.messages = {};
    }
}
exports.default = CreateGovAffairValidator;
//# sourceMappingURL=CreateGovAffairValidator.js.map