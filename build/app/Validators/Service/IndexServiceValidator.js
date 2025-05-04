"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class IndexServiceValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            page: Validator_1.schema.number.optional(),
            limit: Validator_1.schema.number.optional(),
            keyword: Validator_1.schema.string.optional(),
            sort: Validator_1.schema.string.optional(),
            order: Validator_1.schema.enum.optional(['asc', 'desc']),
            manufacturer_id: Validator_1.schema.number.optional(),
            country_ids: Validator_1.schema.string.optional(),
            category_ids: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = IndexServiceValidator;
//# sourceMappingURL=IndexServiceValidator.js.map