"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateMarketingServiceCategoryValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            description: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = UpdateMarketingServiceCategoryValidator;
//# sourceMappingURL=UpdateMarketingServiceCategoryValidator.js.map