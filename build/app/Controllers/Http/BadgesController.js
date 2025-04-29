"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Badge_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Badge"));
class BadgeController {
    async index({ auth }) {
        return await Badge_1.default.query().where('user_id', auth.user.id);
    }
    async store({ auth, request, response }) {
        const { badgeName } = request.only(['badgeName']);
        const badge = await Badge_1.default.create({ userId: auth.user.id, badgeName });
        return response.created(badge);
    }
}
exports.default = BadgeController;
//# sourceMappingURL=BadgesController.js.map