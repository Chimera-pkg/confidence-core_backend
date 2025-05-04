"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Journal_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Journal"));
class JournalController {
    async index({ auth }) {
        return await Journal_1.default.query().where('user_id', auth.user.id);
    }
    async store({ auth, request, response }) {
        const data = request.only(['title', 'content']);
        const journal = await Journal_1.default.create({ ...data, userId: auth.user.id });
        return response.created(journal);
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
        journal.merge(request.only(['title', 'content']));
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