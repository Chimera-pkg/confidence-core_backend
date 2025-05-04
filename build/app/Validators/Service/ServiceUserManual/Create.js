"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateServiceUserManualValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            file: Validator_1.schema.file({
                size: '2mb',
                extnames: ['pdf'],
            }),
        });
        this.messages = {};
    }
}
exports.default = CreateServiceUserManualValidator;
//# sourceMappingURL=Create.js.map