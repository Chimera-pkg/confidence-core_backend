"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Schedule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Schedule"));
const luxon_1 = require("luxon");
class ScheduleSeeder extends Seeder_1.default {
    async run() {
        await Schedule_1.default.createMany([
            {
                userId: 1,
                days: JSON.stringify({ mon: true, tue: false, wed: true, thu: false, fri: true }),
                streakCount: 3,
                lastLoginDate: luxon_1.DateTime.now().minus({ days: 1 }),
                lastJournalDate: luxon_1.DateTime.now().minus({ days: 1 }).toISODate(),
            },
            {
                userId: 2,
                days: JSON.stringify({ mon: false, tue: true, wed: false, thu: true, fri: false }),
                streakCount: 7,
                lastLoginDate: luxon_1.DateTime.now().minus({ days: 1 }),
                lastJournalDate: luxon_1.DateTime.now().minus({ days: 1 }).toISODate(),
            },
            {
                userId: 3,
                days: JSON.stringify({ mon: true, tue: true, wed: true, thu: true, fri: true }),
                streakCount: 30,
                lastLoginDate: luxon_1.DateTime.now().minus({ days: 1 }),
                lastJournalDate: luxon_1.DateTime.now().minus({ days: 1 }).toISODate(),
            },
        ]);
    }
}
exports.default = ScheduleSeeder;
//# sourceMappingURL=SchedulesSeeder.js.map