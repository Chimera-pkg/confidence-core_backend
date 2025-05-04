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
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const UnprocessableEntityException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnprocessableEntityException"));
const User_1 = __importStar(global[Symbol.for('ioc.use')]("App/Models/User"));
const standalone_1 = require("@adonisjs/auth/build/standalone");
const VerifyEmail_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Mailers/VerifyEmail"));
const SendEmailVerificationValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SendEmailVerificationValidator"));
class AuthController {
    async login({ request, auth }) {
        const email = request.input('email');
        const password = request.input('password');
        const user = await User_1.default.findBy('email', email);
        if (!user) {
            throw new standalone_1.AuthenticationException('email is not registered', 'E_UNAUTHORIZED_ACCESS');
        }
        if (!user.password) {
            throw new standalone_1.AuthenticationException('cannot login using password', 'E_UNAUTHORIZED_ACCESS');
        }
        if (!user.isVerified) {
            throw new standalone_1.AuthenticationException('user is not verified yet', 'E_UNAUTHORIZED_ACCESS');
        }
        const token = await auth.use('api').attempt(email, password, {
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
        newUser.email = email;
        newUser.username = username;
        newUser.password = password;
        newUser.role = User_1.UserRole.admin;
        newUser.isVerified = true;
        await newUser.save();
        return {
            message: `Admin created successfully`,
        };
    }
    async sendEmailVerification({ request }) {
        await request.validate(SendEmailVerificationValidator_1.default);
        const email = request.input('email');
        const user = await User_1.default.findBy('email', email);
        if (!user) {
            throw new UnprocessableEntityException_1.default('email is not registered');
        }
        if (user.isVerified) {
            throw new UnprocessableEntityException_1.default('user with this email already verified');
        }
        const verificationUrl = this.generateVerificationUrl(user.email);
        const resendVerificationUrl = this.generateResendVerificationUrl(user.email);
        const verifyEmail = new VerifyEmail_1.default('Welcome to MedMap!', user.email, user.username, verificationUrl, resendVerificationUrl);
        const isDevelopment = Env_1.default.get('NODE_ENV') === 'development';
        const isStaging = Env_1.default.get('NODE_ENV') === 'staging';
        let response;
        if (isDevelopment || isStaging) {
            response = await verifyEmail.preview();
        }
        else {
            await verifyEmail.send();
        }
        return {
            message: `Email verification sent to ${user.email}`,
            response,
        };
    }
    async verifyEmail({ request }) {
        if (!request.hasValidSignature()) {
            throw new UnprocessableEntityException_1.default('Signature is missing or URL was tampered.');
        }
        const email = request.param('email');
        const user = await User_1.default.findBy('email', email);
        if (!user) {
            throw new UnprocessableEntityException_1.default('Email is not registered');
        }
        if (user.isVerified) {
            throw new UnprocessableEntityException_1.default('Email already verified');
        }
        user.isVerified = true;
        await user.save();
        return {
            message: 'Email verified successfully',
        };
    }
    generateVerificationUrl(email) {
        const url = Route_1.default.makeSignedUrl('verifyEmail', { email }, { expiresIn: '24h' });
        const clientWebBaseUrl = Env_1.default.get('CLIENT_WEB_BASEURL');
        return `${clientWebBaseUrl}/verify-email?url=${url}`;
    }
    generateResendVerificationUrl(email) {
        const clientWebBaseUrl = Env_1.default.get('CLIENT_WEB_BASEURL');
        return `${clientWebBaseUrl}/send-verification?email=${email}`;
    }
    async registerUser({ request }) {
        const email = request.input('email');
        const username = request.input('username');
        const password = request.input('password');
        const existingUser = await User_1.default.query()
            .where('email', email)
            .orWhere('username', username)
            .first();
        if (existingUser) {
            throw new UnprocessableEntityException_1.default('User already exists');
        }
        const newUser = new User_1.default();
        newUser.email = email;
        newUser.username = username;
        newUser.password = password;
        newUser.isVerified = false;
        await newUser.save();
        return {
            message: 'User registered successfully',
            user: newUser,
        };
    }
    async updateVerificationStatus({ request }) {
        const email = request.input('email');
        const isVerified = request.input('is_verified');
        if (typeof isVerified !== 'boolean') {
            throw new UnprocessableEntityException_1.default('is_verified must be a boolean value');
        }
        const user = await User_1.default.findBy('email', email);
        if (!user) {
            throw new UnprocessableEntityException_1.default('User not found');
        }
        user.isVerified = isVerified;
        await user.save();
        return {
            message: `User verification status updated successfully`,
            user,
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map