"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class LeaderboardsController {
    async index({}) {
        const users = await Database_1.default.from('users').select('id', 'username', 'grade', 'age');
        const schedules = await Database_1.default.from('schedules').select('user_id', 'streak_count', 'journal_count');
        const xpMeters = await Database_1.default.from('xp_meters').select('user_id', 'xp');
        const journals = await Database_1.default.from('journals')
            .count('* as journalCount')
            .select('user_id')
            .groupBy('user_id');
        const leaderboard = users.map((user) => {
            const schedule = schedules.find((s) => s.user_id === user.id) || {
                streak_count: 0,
                journal_count: 0,
            };
            const xpMeter = xpMeters.find((x) => x.user_id === user.id) || { xp: 0 };
            const journal = journals.find((j) => j.user_id === user.id) || { journalCount: 0 };
            const streakCount = schedule.streak_count;
            const journalCount = schedule.journal_count + journal.journalCount;
            const xp = xpMeter.xp;
            const totalScore = journalCount * 2 + streakCount * 3 + xp;
            return {
                id: user.id,
                username: user.username,
                grade: user.grade,
                age: user.age,
                streakCount,
                journalCount,
                xp,
                totalScore,
            };
        });
        const sortedLeaderboard = leaderboard
            .sort((a, b) => b.totalScore - a.totalScore)
            .map((user, index) => ({
            ...user,
            rank: index + 1,
        }));
        return sortedLeaderboard;
    }
}
exports.default = LeaderboardsController;
//# sourceMappingURL=LeaderboardsController.js.map