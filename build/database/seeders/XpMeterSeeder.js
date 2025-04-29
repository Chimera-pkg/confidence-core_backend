"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const XpMeter_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/XpMeter"));
class XpMeterSeeder extends Seeder_1.default {
    async run() {
        await XpMeter_1.default.createMany([
            {
                userId: 1,
                xp: 100,
                level: 2,
            },
            {
                userId: 2,
                xp: 50,
                level: 1,
            },
            {
                userId: 3,
                xp: 200,
                level: 3,
            },
        ]);
    }
}
exports.default = XpMeterSeeder;
//# sourceMappingURL=XpMeterSeeder.js.map