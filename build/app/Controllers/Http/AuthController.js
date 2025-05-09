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
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const UnprocessableEntityException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnprocessableEntityException"));
const User_1 = __importStar(global[Symbol.for('ioc.use')]("App/Models/User"));
const standalone_1 = require("@adonisjs/auth/build/standalone");
const EmailNotRegisteredException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/EmailNotRegisteredException"));
class AuthController {
    async login({ request, auth }) {
        const username = request.input('username');
        const password = request.input('password');
        const user = await User_1.default.findBy('username', username);
        if (!user) {
            throw new EmailNotRegisteredException_1.default();
        }
        if (!user.password) {
            throw new standalone_1.AuthenticationException('cannot login using password', 'E_UNAUTHORIZED_ACCESS');
        }
        const token = await auth.use('api').attempt(username, password, {
            expiresIn: '7 days',
        });
        return {
            token,
            user: token.user,
        };
    }
    async registerAdmin({ request }) {
        const email = request.input('email');
        const username = request.input('username');
        const password = request.input('password');
        const appKey = Env_1.default.get('APP_KEY');
        const requestAppKey = request.header('x-api-key');
        if (appKey !== requestAppKey) {
            throw new UnprocessableEntityException_1.default('Unauthorized access');
        }
        let user = await User_1.default.findBy('email', email);
        if (user) {
            throw new UnprocessableEntityException_1.default('Email already exist');
        }
        user = await User_1.default.findBy('username', username);
        if (user) {
            throw new UnprocessableEntityException_1.default('Username already exist');
        }
        const newUser = new User_1.default();
        newUser.username = username;
        newUser.password = password;
        newUser.role = User_1.UserRole.admin;
        await newUser.save();
        return {
            message: `Admin created successfully`,
        };
    }
    async registerUser({ request }) {
        const data = request.only(['username', 'password', 'age', 'grade']);
        const existingUser = await User_1.default.query().where('username', data.username).first();
        if (existingUser) {
            throw new Error('Username already exists');
        }
        const newUser = new User_1.default();
        newUser.username = data.username;
        newUser.password = data.password;
        newUser.age = data.age;
        newUser.grade = data.grade;
        newUser.role = User_1.UserRole.user;
        await newUser.save();
        return {
            message: 'User registered successfully',
            user: newUser,
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map