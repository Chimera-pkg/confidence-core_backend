"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                email: 'hehe@mail.com',
                username: 'hehe',
                password: 'hehe',
            },
            {
                email: 'user1@mail.com',
                username: 'user1',
                password: 'password1',
            },
            {
                email: 'user2@mail.com',
                username: 'user2',
                password: 'password2',
            },
            {
                email: 'user3@mail.com',
                username: 'user3',
                password: 'password3',
            },
            {
                email: 'user4@mail.com',
                username: 'user4',
                password: 'password4',
            },
            {
                email: 'admin@mail.com',
                username: 'admin',
                password: 'admin',
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map