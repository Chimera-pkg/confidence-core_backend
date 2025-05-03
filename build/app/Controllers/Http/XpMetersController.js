"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const XpMeter_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/XpMeter"));
class XpMeterController {
    async show({ auth }) {
        const meter = await XpMeter_1.default.findBy('user_id', auth.user.id);
        return meter || (await XpMeter_1.default.create({ userId: auth.user.id }));
    }
    async store({ auth, request }) {
        const { xp, level } = request.only(['xp', 'level']);
        const meter = await XpMeter_1.default.create({ userId: auth.user.id, xp, level });
        return meter;
    }
    async update({ params, request }) {
        const xpDelta = request.input('xpDelta');
        if (typeof xpDelta !== 'number' || isNaN(xpDelta)) {
            return {
                message: 'Invalid xpDelta value. It must be a valid number.',
            };
        }
        const meter = await XpMeter_1.default.findOrFail(params.id);
        if (typeof meter.xp !== 'number' || isNaN(meter.xp)) {
            meter.xp = 0;
        }
        meter.xp += xpDelta;
        meter.level = Math.floor(meter.xp / 100) + 1;
        await meter.save();
        return meter;
    }
    async delete({ auth }) {
        const meter = await XpMeter_1.default.findByOrFail('user_id', auth.user.id);
        await meter.delete();
        return { message: 'XP Meter deleted successfully' };
    }
}
exports.default = XpMeterController;
//# sourceMappingURL=XpMetersController.js.map