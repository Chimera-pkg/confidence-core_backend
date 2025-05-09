"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Leaderboard_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Leaderboard"));
class LeaderboardSeeder extends Seeder_1.default {
    async run() {
        await Leaderboard_1.default.createMany([
            { userId: 1, rank: 1, journalCount: 50, streakCount: 48 },
            { userId: 2, rank: 2, journalCount: 45, streakCount: 44 },
            { userId: 3, rank: 3, journalCount: 40, streakCount: 40 },
        ]);
    }
}
exports.default = LeaderboardSeeder;
//# sourceMappingURL=LeaderSeeder.js.map