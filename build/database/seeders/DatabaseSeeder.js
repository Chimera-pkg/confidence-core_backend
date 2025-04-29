"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(require("./User"));
const XpMeterSeeder_1 = __importDefault(require("./XpMeterSeeder"));
const JournalSeeder_1 = __importDefault(require("./JournalSeeder"));
const BadgesSeeder_1 = __importDefault(require("./BadgesSeeder"));
const SchedulesSeeder_1 = __importDefault(require("./SchedulesSeeder"));
class DatabaseSeeder extends Seeder_1.default {
    async call(seeders) {
        for (const seeder of seeders) {
            const instance = new seeder();
            await instance.run();
        }
    }
    async run() {
        await this.call([
            User_1.default,
            XpMeterSeeder_1.default,
            JournalSeeder_1.default,
            BadgesSeeder_1.default,
            SchedulesSeeder_1.default,
        ]);
    }
}
exports.default = DatabaseSeeder;
//# sourceMappingURL=DatabaseSeeder.js.map