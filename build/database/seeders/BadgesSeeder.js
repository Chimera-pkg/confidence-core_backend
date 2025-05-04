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
            },
            {
                userId: 2,
                badgeName: 'Silver Badge',
            },
            {
                userId: 3,
                badgeName: 'Bronze Badge',
            },
        ]);
    }
}
exports.default = BadgeSeeder;
//# sourceMappingURL=BadgesSeeder.js.map