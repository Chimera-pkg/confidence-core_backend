"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class FileUpload extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'file_uploads';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('extname').notNullable();
            table.string('type').notNullable();
            table.bigInteger('size').unsigned();
            table.string('path').notNullable();
            table.string('url').notNullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = FileUpload;
//# sourceMappingURL=1633761188775_file_uploads.js.map