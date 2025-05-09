"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leaderboard_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Leaderboard"));
class LeaderboardsController {
    async index({}) {
        return await Leaderboard_1.default.query().preload('user').orderBy('rank', 'asc');
    }
}
exports.default = LeaderboardsController;
//# sourceMappingURL=LeaderboardsController.js.map