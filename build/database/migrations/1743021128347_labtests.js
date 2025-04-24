"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class LabTests extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'lab_tests';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('patient_name').notNullable();
            table.string('test_case_id').notNullable();
            table.string('physician_name').notNullable();
            table.string('disease').notNullable();
            table.string('specimen_type').notNullable();
            table.string('report_status').notNullable();
            table.timestamps(true, true);
            table.timestamp('deleted_at', { useTz: true }).nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = LabTests;
//# sourceMappingURL=1743021128347_labtests.js.map