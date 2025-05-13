"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UpdateBadgesAtSchedules extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'schedules';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.json('badges').nullable().defaultTo(JSON.stringify([]));
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('badges');
        });
    }
}
exports.default = UpdateBadgesAtSchedules;
//# sourceMappingURL=1747026000601_update_badges_at_schedules.js.map