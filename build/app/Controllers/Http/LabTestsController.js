"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LabTest_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/LabTest"));
class LabTestsController {
    async index({ response }) {
        const labTests = await LabTest_1.default.all();
        return response.ok(labTests);
    }
    async store({ request, response }) {
        const data = request.only([
            'patientName',
            'testCaseId',
            'physicianName',
            'disease',
            'specimenType',
            'reportStatus',
        ]);
        const labTest = await LabTest_1.default.create(data);
        return response.created(labTest);
    }
    async show({ params, response }) {
        const labTest = await LabTest_1.default.findOrFail(params.id);
        return response.ok(labTest);
    }
    async update({ params, request, response }) {
        const labTest = await LabTest_1.default.findOrFail(params.id);
        const data = request.only([
            'patientName',
            'testCaseId',
            'physicianName',
            'disease',
            'specimenType',
            'reportStatus',
        ]);
        labTest.merge(data);
        await labTest.save();
        return response.ok(labTest);
    }
    async destroy({ params, response }) {
        const labTest = await LabTest_1.default.findOrFail(params.id);
        await labTest.delete();
        return response.noContent();
    }
}
exports.default = LabTestsController;
//# sourceMappingURL=LabTestsController.js.map