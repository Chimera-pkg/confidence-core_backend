"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AddFeelingToJournals extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'journals';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('feeling').notNullable().defaultTo('okay');
            table.string('reason_feeling').nullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('feeling');
            table.dropColumn('reason_feeling');
        });
    }
}
exports.default = AddFeelingToJournals;
//# sourceMappingURL=1746338255982_add_feeling_to_journals.js.map