"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AddLastJournalDateToSchedules extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'schedules';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.date('last_journal_date').nullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('last_journal_date');
        });
    }
}
exports.default = AddLastJournalDateToSchedules;
//# sourceMappingURL=1746809943464_add_last_journal_date_to_schedules.js.map