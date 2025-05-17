"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leaderboard_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Leaderboard"));
class LeaderboardsController {
    async index({}) {
        const leaderboards = await Leaderboard_1.default.query().preload('user');
        const sorted = leaderboards
            .map((l) => ({
            ...l.toJSON(),
            totalScore: (l.journalCount || 0) * 2 + (l.streakCount || 0) * 3 + (l.xp || 0),
        }))
            .sort((a, b) => b.totalScore - a.totalScore)
            .map((l, i) => ({ ...l, rank: i + 1 }));
        return sorted;
    }
}
exports.default = LeaderboardsController;
//# sourceMappingURL=LeaderboardsController.js.map