"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
class UpdateProductValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            description: Validator_1.schema.string.optional(),
            is_published: Validator_1.schema.boolean.optional(),
            category_id: Validator_1.schema.number.optional(),
            tags: Validator_1.schema.string.optional(),
            specifications: Validator_1.schema.array.optional().members(Validator_1.schema.object().members({
                name: Validator_1.schema.string(),
                value: Validator_1.schema.string(),
            })),
            clinical_applications: Validator_1.schema.array.optional().members(Validator_1.schema.object().members({
                content: Validator_1.schema.string(),
            })),
            workflows: Validator_1.schema.array.optional().members(Validator_1.schema.object().members({
                seq: Validator_1.schema.number(),
                title: Validator_1.schema.string(),
                description: Validator_1.schema.string(),
            })),
            comparisons: Validator_1.schema.array.optional().members(Validator_1.schema.object().members({
                comp_product_id: Validator_1.schema.number(),
                specs: Validator_1.schema.array().members(Validator_1.schema.object().members({
                    origin_spec_id: Validator_1.schema.number(),
                    comp_spec_id: Validator_1.schema.number(),
                })),
            })),
            faqs: Validator_1.schema.array.optional().members(Validator_1.schema.object().members({
                question: Validator_1.schema.string(),
                answer: Validator_1.schema.string(),
            })),
            videos: Validator_1.schema.array.optional().members(Validator_1.schema.string({}, [Validator_1.rules.regex(youtubeRegex)])),
        });
        this.messages = {
            'videos.url.regex': '"url" must be valid YouTube video URL',
        };
    }
}
exports.default = UpdateProductValidator;
//# sourceMappingURL=UpdateProductValidator.js.map