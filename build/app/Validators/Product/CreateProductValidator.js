"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
class CreateProductValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string(),
            description: Validator_1.schema.string(),
            is_published: Validator_1.schema.boolean(),
            category_id: Validator_1.schema.number(),
            tags: Validator_1.schema.string.optional(),
            thumbnail: Validator_1.schema.file({
                size: '1mb',
                extnames: ['jpg', 'jpeg', 'png', 'webp'],
            }),
            specifications: Validator_1.schema.array().members(Validator_1.schema.object().members({
                name: Validator_1.schema.string(),
                value: Validator_1.schema.string(),
            })),
            clinical_applications: Validator_1.schema.array().members(Validator_1.schema.object().members({
                content: Validator_1.schema.string(),
            })),
            workflows: Validator_1.schema.array().members(Validator_1.schema.object().members({
                seq: Validator_1.schema.number(),
                title: Validator_1.schema.string(),
                description: Validator_1.schema.string(),
            })),
            faqs: Validator_1.schema.array().members(Validator_1.schema.object().members({
                question: Validator_1.schema.string(),
                answer: Validator_1.schema.string(),
            })),
            videos: Validator_1.schema.array.optional().members(Validator_1.schema.string({}, [Validator_1.rules.regex(youtubeRegex)])),
        });
        this.messages = {
            'name.required': 'name is required',
            'description.required': 'description is required',
            'is_published.required': 'is_published is required',
            'category_id.required': 'category_id is required',
            'videos.url.regex': '"url" must be valid YouTube video URL',
        };
    }
}
exports.default = CreateProductValidator;
//# sourceMappingURL=CreateProductValidator.js.map