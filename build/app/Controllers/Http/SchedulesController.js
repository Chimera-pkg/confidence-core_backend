"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Schedule"));
const luxon_1 = require("luxon");
class ScheduleController {
    async show({ auth }) {
        const userId = auth.user.id;
        const schedule = await Schedule_1.default.findBy('user_id', userId);
        if (!schedule) {
            return { message: 'No schedule found for this user' };
        }
        return schedule;
    }
    async store({ auth, request }) {
        const userId = auth.user.id;
        const data = request.only(['days', 'streakCount', 'lastLoginDate']);
        const schedule = await Schedule_1.default.create({
            userId,
            days: data.days,
            streakCount: data.streakCount || 0,
            lastLoginDate: data.lastLoginDate || luxon_1.DateTime.now(),
        });
        return { message: 'Schedule created successfully', schedule };
    }
    async delete({ auth, response }) {
        const userId = auth.user.id;
        const schedule = await Schedule_1.default.findBy('user_id', userId);
        if (!schedule) {
            return response.notFound({ message: 'No schedule found for this user' });
        }
        await schedule.delete();
        return { message: 'Schedule deleted successfully' };
    }
    async dailyLogin({ auth }) {
        const userId = auth.user.id;
        let schedule = await Schedule_1.default.findBy('user_id', userId);
        if (!schedule) {
            schedule = await Schedule_1.default.create({
                userId,
                streakCount: 1,
                lastLoginDate: luxon_1.DateTime.now(),
            });
            return { message: 'First login recorded', streak: schedule.streakCount };
        }
        const now = luxon_1.DateTime.now();
        const lastLogin = schedule.lastLoginDate;
        if (lastLogin && now.diff(lastLogin, 'days').days < 1) {
            return { message: 'Already logged in today', streak: schedule.streakCount };
        }
        if (lastLogin && now.diff(lastLogin, 'days').days === 1) {
            schedule.streakCount += 1;
        }
        else {
            schedule.streakCount = 1;
        }
        schedule.lastLoginDate = now;
        await schedule.save();
        if ([3, 7, 30].includes(schedule.streakCount)) {
            return {
                message: `Congratulations! You've reached a ${schedule.streakCount}-day streak!`,
                streak: schedule.streakCount,
            };
        }
        return { message: 'Login recorded', streak: schedule.streakCount };
    }
}
exports.default = ScheduleController;
//# sourceMappingURL=SchedulesController.js.map