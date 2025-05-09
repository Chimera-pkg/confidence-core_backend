"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Profiles extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'profiles';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.string('avatar_url').nullable();
            table.integer('level').defaultTo(1);
            table.integer('xp').defaultTo(0);
            table.integer('streak_count').defaultTo(0);
            table.integer('journal_count').defaultTo(0);
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Profiles;
//# sourceMappingURL=1746356376846_create_profiles_tables.js.map