"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateRegulationAssessmentValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            risk_classification_id: Validator_1.schema.number(),
            regulatory_agency_ids: Validator_1.schema.array().members(Validator_1.schema.number()),
            product_owner_name: Validator_1.schema.string(),
            name_as_device_label: Validator_1.schema.string(),
            device_identitier: Validator_1.schema.string(),
            intended_purpose: Validator_1.schema.string(),
            country_id: Validator_1.schema.number(),
            daeler_type_ids: Validator_1.schema.array().members(Validator_1.schema.number()),
            specimen_type_id: Validator_1.schema.number(),
            importer_license: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
            wholesaler_license: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
            manufacture_license: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
            testing_report: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
            user_manual: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
            medical_license: Validator_1.schema.file({
                size: '3mb',
                extnames: ['pdf'],
            }),
        });
        this.messages = {};
    }
}
exports.default = CreateRegulationAssessmentValidator;
//# sourceMappingURL=CreateRegulationAssessmentValidator.js.map