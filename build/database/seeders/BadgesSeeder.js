"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Badge_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Badge"));
class BadgeSeeder extends Seeder_1.default {
    async run() {
        await Badge_1.default.createMany([
            {
                userId: 1,
                badgeName: 'Gold Badge',
                awardedAt: '2023-10-01 10:00:00',
            },
            {
                userId: 2,
                badgeName: 'Silver Badge',
                awardedAt: '2023-10-02 11:00:00',
            },
            {
                userId: 3,
                badgeName: 'Bronze Badge',
                awardedAt: '2023-10-03 12:00:00',
            },
        ]);
    }
}
exports.default = BadgeSeeder;
//# sourceMappingURL=BadgesSeeder.js.map