"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const CreateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/User/CreateUserValidator"));
const UnprocessableEntityException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnprocessableEntityException"));
const VerifyEmail_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Mailers/VerifyEmail"));
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
const UpdateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateUserValidator"));
class UsersController {
    async index({ request, bouncer }) {
        const page = request.input('page', 1);
        const limit = request.input('limit', 10);
        const role = request.input('role', '');
        await bouncer.with('UserPolicy').authorize('viewList');
        const queryUsers = User_1.default.query();
        if (role) {
            queryUsers.where('role', role);
        }
        const users = await queryUsers.paginate(page, limit);
        users.baseUrl('/users');
        return users;
    }
    async show({ params, bouncer }) {
        const user = await User_1.default.findOrFail(params.id);
        return user;
    }
    async store({ request }) {
        await request.validate(CreateUserValidator_1.default);
        const data = request.only(['name', 'email', 'username', 'password', 'role']);
        const existingUser = await User_1.default.query()
            .where('email', data.email)
            .orWhere('username', data.username)
            .first();
        if (existingUser) {
            throw new UnprocessableEntityException_1.default('User already exists');
        }
        const user = new User_1.default();
        user.email = data.email;
        user.username = data.username;
        user.role = data.role;
        user.password = data.password;
        await user.save();
        const verificationUrl = this.generateVerificationUrl(user.email);
        const resendVerificationUrl = this.generateResendVerificationUrl(user.email);
        const verifyEmail = new VerifyEmail_1.default('Welcome to MedMap!', user.email, user.username, verificationUrl, resendVerificationUrl, data.password);
        const isDevelopment = Env_1.default.get('NODE_ENV') === 'development';
        const isStaging = Env_1.default.get('NODE_ENV') === 'staging';
        let response;
        if (isDevelopment || isStaging) {
            response = await verifyEmail.preview();
        }
        else {
            verifyEmail
                .send()
                .then(() => {
                Logger_1.default.info(`Verification email sent to ${user.email}`);
            })
                .catch((error) => {
                Logger_1.default.error(error);
            });
        }
        return {
            ...user.toJSON(),
            response,
        };
    }
    async update({ params, request }) {
        await request.validate(UpdateUserValidator_1.default);
        const data = request.only(['name', 'email', 'username', 'password', 'role']);
        const user = await User_1.default.find(params.id);
        if (!user) {
            throw new NotFoundException_1.default('user is not found');
        }
        if (user.email !== data.email) {
            const existingUser = await User_1.default.query().where('email', data.email).first();
            if (existingUser) {
                throw new UnprocessableEntityException_1.default('User already exists');
            }
        }
        if (user.username !== data.username) {
            const existingUser = await User_1.default.query().where('username', data.username).first();
            if (existingUser) {
                throw new UnprocessableEntityException_1.default('User already exists');
            }
        }
        user.email = data.email;
        user.username = data.username;
        user.role = data.role;
        if (data.password) {
            user.password = data.password;
        }
        await user.save();
        return user;
    }
    async destroy({ params }) {
        const user = await User_1.default.find(params.id);
        if (!user) {
            throw new NotFoundException_1.default('user is not found');
        }
        await user.delete();
        return {
            message: `SUCCESS: user deleted`,
            code: 'SUCCESS',
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
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map