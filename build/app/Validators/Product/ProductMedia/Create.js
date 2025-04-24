"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const ProductMedia_1 = global[Symbol.for('ioc.use')]("App/Models/ProductMedia");
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
class CreateProductMediaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            url: Validator_1.schema.string.optional({}, [Validator_1.rules.regex(youtubeRegex)]),
            type: Validator_1.schema.enum(Object.values(ProductMedia_1.ProductMediaType)),
        });
        this.messages = {
            'url.regex': '"url" must be valid YouTube video URL',
        };
    }
}
exports.default = CreateProductMediaValidator;
//# sourceMappingURL=Create.js.map