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
    async update({ auth, request }) {
        const { xpDelta } = request.only(['xpDelta']);
        const meter = await XpMeter_1.default.findByOrFail('user_id', auth.user.id);
        meter.xp += xpDelta;
        meter.level = Math.floor(meter.xp / 100) + 1;
        await meter.save();
        return meter;
    }
}
exports.default = XpMeterController;
//# sourceMappingURL=XpMetersController.js.map