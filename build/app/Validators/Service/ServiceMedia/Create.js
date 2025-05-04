"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const ServiceMedia_1 = global[Symbol.for('ioc.use')]("App/Models/ServiceMedia");
const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
class CreateServiceMediaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional(),
            url: Validator_1.schema.string.optional({}, [Validator_1.rules.regex(youtubeRegex)]),
            type: Validator_1.schema.enum(Object.values(ServiceMedia_1.ServiceMediaType)),
        });
        this.messages = {};
    }
}
exports.default = CreateServiceMediaValidator;
//# sourceMappingURL=Create.js.map