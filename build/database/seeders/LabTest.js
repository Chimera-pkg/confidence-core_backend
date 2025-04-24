"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const LabTest_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/LabTest"));
class LabTestSeeder extends Seeder_1.default {
    async run() {
        await LabTest_1.default.createMany([
            {
                patientName: 'John Doe',
                testCaseId: 'TC001',
                physicianName: 'Dr. Alice Smith',
                disease: 'COVID-19',
                specimenType: 'Nasopharyngeal Swab',
                reportStatus: 'Completed',
            },
            {
                patientName: 'Jane Smith',
                testCaseId: 'TC002',
                physicianName: 'Dr. Robert Johnson',
                disease: 'Influenza A',
                specimenType: 'Throat Swab',
                reportStatus: 'Pending',
            },
            {
                patientName: 'Michael Brown',
                testCaseId: 'TC003',
                physicianName: 'Dr. Sarah Williams',
                disease: 'Strep Throat',
                specimenType: 'Throat Culture',
                reportStatus: 'In Progress',
            },
        ]);
    }
}
exports.default = LabTestSeeder;
//# sourceMappingURL=LabTest.js.map