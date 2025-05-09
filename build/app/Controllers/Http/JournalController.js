"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Journal_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Journal"));
const XpMeter_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/XpMeter"));
class JournalController {
    async index({ auth }) {
        return await Journal_1.default.query().where('user_id', auth.user.id);
    }
    async store({ auth, request, response }) {
        const data = request.only(['title', 'content', 'feeling', 'reasonFeeling']);
        const userId = auth.user.id;
        const journal = await Journal_1.default.create({ ...data, userId });
        let xpMeter = await XpMeter_1.default.findBy('user_id', userId);
        if (!xpMeter) {
            xpMeter = await XpMeter_1.default.create({ userId, xp: 0, level: 1 });
        }
        xpMeter.xp += 20;
        let isLevelUp = false;
        if (xpMeter.xp >= 100) {
            xpMeter.level += 1;
            xpMeter.xp = 0;
            isLevelUp = true;
        }
        await xpMeter.save();
        return response.created({
            message: 'Journal created successfully',
            journal,
            gamification: {
                xp: xpMeter.xp,
                level: xpMeter.level,
                isLevelUp,
            },
        });
    }
    async show({ auth, params, response }) {
        const journal = await Journal_1.default.find(params.id);
        if (journal?.userId !== auth.user.id)
            return response.unauthorized();
        return journal;
    }
    async update({ auth, params, request, response }) {
        const journal = await Journal_1.default.find(params.id);
        if (!journal || journal.userId !== auth.user.id)
            return response.unauthorized();
        journal.merge(request.only(['title', 'content', 'feeling', 'reasonFeeling']));
        await journal.save();
        return journal;
    }
    async destroy({ auth, params, response }) {
        const journal = await Journal_1.default.find(params.id);
        if (!journal || journal.userId !== auth.user.id)
            return response.unauthorized();
        await journal.delete();
        return response.noContent();
    }
}
exports.default = JournalController;
//# sourceMappingURL=JournalController.js.map