"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
class UpdateManufacturerValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            pic_name: Validator_1.schema.string.optional(),
            description: Validator_1.schema.string.optional(),
            industry_category_id: Validator_1.schema.number.optional(),
            country_id: Validator_1.schema.number.optional(),
            address: Validator_1.schema.string.optional(),
            website: Validator_1.schema.string.optional(),
            video: Validator_1.schema.string.optional({}, [Validator_1.rules.regex(youtubeRegex)]),
            about: Validator_1.schema.string.optional(),
            category_id_one: Validator_1.schema.number.optional(),
            category_id_two: Validator_1.schema.number.optional(),
            current_password: Validator_1.schema.string.optional(),
            new_password: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(8)]),
            confirm_new_password: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(8)]),
        });
        this.messages = {
            'video.regex': '"video" must be valid YouTube video URL',
        };
    }
}
exports.default = UpdateManufacturerValidator;
//# sourceMappingURL=UpdateManufacturerValidator.js.map