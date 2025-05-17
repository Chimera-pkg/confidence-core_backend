"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Schedule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Schedule"));
class ScheduleSeeder extends Seeder_1.default {
    async run() {
        await Schedule_1.default.createMany([
            {
                userId: 1,
                days: JSON.stringify([
                    { day: 'Mon', active: true },
                    { day: 'Tue', active: true },
                    { day: 'Wed', active: true },
                    { day: 'Thu', active: true },
                    { day: 'Fri', active: true },
                    { day: 'Sat', active: false },
                    { day: 'Sun', active: false },
                ]),
                streakCount: 3,
                journalCount: 5,
                lastJournalDate: new Date(),
            },
        ]);
    }
}
exports.default = ScheduleSeeder;
//# sourceMappingURL=SchedulesSeeder.js.map