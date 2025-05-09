"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UpdateUsersTable extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('email');
            table.integer('age').notNullable();
            table.string('grade').notNullable();
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('email').notNullable().unique();
            table.dropColumn('username');
            table.dropColumn('password');
            table.dropColumn('age');
            table.dropColumn('grade');
        });
    }
}
exports.default = UpdateUsersTable;
//# sourceMappingURL=1746804937515_update_user_tables.js.map