"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const RegulationAssessment_1 = global[Symbol.for('ioc.use')]("App/Models/RegulationAssessment");
class UpdateRegulationAssessmentValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            status: Validator_1.schema.enum(Object.values(RegulationAssessment_1.RegulationAssessmentStatusEnum)),
        });
        this.messages = {};
    }
}
exports.default = UpdateRegulationAssessmentValidator;
//# sourceMappingURL=UpdateRegulationAssessmentValidator.js.map