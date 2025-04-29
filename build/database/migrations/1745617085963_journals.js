"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Journals extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'journals';
    }
    async up() {
        const exists = await this.schema.hasTable(this.tableName);
        if (!exists) {
            this.schema.createTable(this.tableName, (table) => {
                table.increments('id').primary();
                table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
                table.string('title').notNullable();
                table.text('content').notNullable();
                table.date('entry_date').notNullable();
                table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
                table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
            });
        }
    }
    async down() {
        const exists = await this.schema.hasTable(this.tableName);
        if (exists) {
            this.schema.dropTable(this.tableName);
        }
    }
}
exports.default = Journals;
//# sourceMappingURL=1745617085963_journals.js.map