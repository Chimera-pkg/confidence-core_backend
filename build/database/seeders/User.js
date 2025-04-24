"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importStar(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        const uniqueKey = 'id';
        await User_1.default.updateOrCreateMany(uniqueKey, [
            {
                id: 1,
                email: 'admin@mail.com',
                username: 'admin',
                password: 'admin',
                isVerified: true,
                role: User_1.UserRole.admin,
            },
            {
                id: 2,
                email: 'patient@mail.com',
                username: 'patient',
                password: 'patient',
                isVerified: true,
            },
            {
                id: 3,
                email: 'nurse@mail.com',
                username: 'nurse',
                password: 'nurses',
                isVerified: true,
            },
            {
                id: 4,
                email: 'pharmacist@mail.com',
                username: 'pharmacist',
                password: 'pharmacist',
                isVerified: true,
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map