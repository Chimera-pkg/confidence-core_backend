"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AddJournalCountToSchedules extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'schedules';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('journal_count').defaultTo(0);
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('journal_count');
        });
    }
}
exports.default = AddJournalCountToSchedules;
//# sourceMappingURL=1747473480131_update_schedules.js.map