"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Schedule"));
const luxon_1 = require("luxon");
class SchedulesController {
    async setDays({ auth, request }) {
        const days = request.input('days');
        let schedule = await Schedule_1.default.findBy('user_id', auth.user.id);
        if (!schedule) {
            schedule = await Schedule_1.default.create({
                userId: auth.user.id,
                days: JSON.stringify(days),
                streakCount: 0,
                journalCount: 0,
            });
        }
        else {
            schedule.days = JSON.stringify(days);
            await schedule.save();
        }
        return { days };
    }
    async streak({ auth }) {
        const schedule = await Schedule_1.default.findBy('user_id', auth.user.id);
        return { streak: schedule?.streakCount || 0 };
    }
    async totalJournal({ auth }) {
        const schedule = await Schedule_1.default.findBy('user_id', auth.user.id);
        return { journalCount: schedule?.journalCount || 0 };
    }
    async show({ auth }) {
        const defaultDays = [
            { day: 'Mon', active: false },
            { day: 'Tue', active: false },
            { day: 'Wed', active: false },
            { day: 'Thurs', active: false },
            { day: 'Friday', active: false },
            { day: 'Saturday', active: false },
            { day: 'Sunday', active: false },
        ];
        let schedule = await Schedule_1.default.findBy('user_id', auth.user.id);
        if (!schedule) {
            schedule = await Schedule_1.default.create({
                userId: auth.user.id,
                days: JSON.stringify(defaultDays),
                streakCount: 0,
                journalCount: 0,
            });
        }
        let daysArr = [];
        try {
            daysArr = schedule.days ? JSON.parse(schedule.days) : defaultDays;
        }
        catch {
            daysArr = defaultDays;
        }
        return {
            ...schedule.toJSON(),
            days: daysArr,
        };
    }
    async updateStreakOnJournal({ auth }) {
        const userId = auth.user.id;
        let schedule = await Schedule_1.default.findBy('user_id', userId);
        if (!schedule) {
            schedule = await Schedule_1.default.create({
                userId,
                days: JSON.stringify([]),
                streakCount: 1,
                journalCount: 1,
                lastJournalDate: luxon_1.DateTime.local(),
            });
        }
        else {
            schedule.journalCount = (schedule.journalCount || 0) + 1;
            schedule.streakCount = (schedule.streakCount || 0) + 1;
            schedule.lastJournalDate = luxon_1.DateTime.local();
            await schedule.save();
        }
        return {
            streak: schedule.streakCount,
            journalCount: schedule.journalCount,
            lastJournalDate: schedule.lastJournalDate,
        };
    }
}
exports.default = SchedulesController;
//# sourceMappingURL=SchedulesController.js.map