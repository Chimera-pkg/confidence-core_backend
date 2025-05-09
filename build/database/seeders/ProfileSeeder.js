"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
class ProfileSeeder extends Seeder_1.default {
    async run() {
        await Profile_1.default.createMany([
            {
                userId: 1,
                avatarUrl: 'https://example.com/avatar1.png',
                level: 16,
                xp: 40,
                streakCount: 14,
                journalCount: 14,
            },
            {
                userId: 2,
                avatarUrl: 'https://example.com/avatar2.png',
                level: 10,
                xp: 20,
                streakCount: 7,
                journalCount: 10,
            },
        ]);
    }
}
exports.default = ProfileSeeder;
//# sourceMappingURL=ProfileSeeder.js.map