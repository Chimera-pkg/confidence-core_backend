"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class RemoveIsVerifiedFromUsers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('is_verified');
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.boolean('is_verified').defaultTo(false);
        });
    }
}
exports.default = RemoveIsVerifiedFromUsers;
//# sourceMappingURL=1746339790426_remove_is_verified_from_users.js.map