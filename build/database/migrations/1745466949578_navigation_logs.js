"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class NavigationLogs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'navigation_logs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary();
            table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
            table.string('url').notNullable();
            table.timestamp('visited_at').defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = NavigationLogs;
//# sourceMappingURL=1745466949578_navigation_logs.js.map