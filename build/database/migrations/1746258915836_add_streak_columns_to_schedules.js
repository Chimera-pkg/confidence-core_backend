"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AddStreakColumnsToSchedules extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'schedules';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('streak_count').defaultTo(0);
            table.timestamp('last_login_date').nullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('streak_count');
            table.dropColumn('last_login_date');
        });
    }
}
exports.default = AddStreakColumnsToSchedules;
//# sourceMappingURL=1746258915836_add_streak_columns_to_schedules.js.map