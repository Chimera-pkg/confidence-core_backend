"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Schedule"));
class ScheduleController {
    async show({ auth }) {
        return await Schedule_1.default.findBy('user_id', auth.user.id);
    }
    async update({ auth, request }) {
        const payload = request.only(['days']);
        let sched = await Schedule_1.default.findBy('user_id', auth.user.id);
        if (sched)
            sched.merge(payload);
        else
            sched = await Schedule_1.default.create({ userId: auth.user.id, ...payload });
        await sched.save();
        return sched;
    }
}
exports.default = ScheduleController;
//# sourceMappingURL=SchedulesController.js.map