"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Journal_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Journal"));
class JournalSeeder extends Seeder_1.default {
    async run() {
        await Journal_1.default.createMany([
            {
                userId: 1,
                title: 'Admin Journal 1',
                content: 'This is the first journal entry by admin.',
                feeling: 'happy',
                reasonFeeling: 'friend',
            },
            {
                userId: 2,
                title: 'User1 Journal 1',
                content: 'This is the first journal entry by user1.',
                feeling: 'okay',
                reasonFeeling: 'school',
            },
            {
                userId: 3,
                title: 'User2 Journal 1',
                content: 'This is the first journal entry by user2.',
                feeling: 'bad',
                reasonFeeling: 'work',
            },
            {
                userId: 1,
                title: 'Admin Journal 2',
                content: 'This is the second journal entry by admin.',
                feeling: 'happy',
                reasonFeeling: 'family',
            },
        ]);
    }
}
exports.default = JournalSeeder;
//# sourceMappingURL=JournalSeeder.js.map