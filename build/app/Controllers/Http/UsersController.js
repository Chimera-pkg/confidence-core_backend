"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const CreateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/User/CreateUserValidator"));
const UnprocessableEntityException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnprocessableEntityException"));
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
const UpdateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateUserValidator"));
class UsersController {
    async index({}) {
        return await User_1.default.all();
    }
    async show({ params }) {
        return await User_1.default.findOrFail(params.id);
    }
    async store({ request }) {
        await request.validate(CreateUserValidator_1.default);
        const data = request.only(['username', 'password', 'age', 'grade', 'role']);
        const existingUser = await User_1.default.query().where('username', data.username).first();
        if (existingUser) {
            throw new UnprocessableEntityException_1.default('User already exists');
        }
        const user = new User_1.default();
        user.username = data.username;
        user.password = data.password;
        user.age = data.age;
        user.grade = data.grade;
        user.role = data.role;
        await user.save();
        return {
            message: 'User created successfully',
            user,
        };
    }
    async update({ params, request }) {
        await request.validate(UpdateUserValidator_1.default);
        const data = request.only(['username', 'password', 'age', 'grade', 'role']);
        const user = await User_1.default.find(params.id);
        if (!user) {
            throw new NotFoundException_1.default('User is not found');
        }
        if (user.username !== data.username) {
            const existingUser = await User_1.default.query().where('username', data.username).first();
            if (existingUser) {
                throw new UnprocessableEntityException_1.default('Username already exists');
            }
        }
        user.username = data.username;
        user.age = data.age;
        user.grade = data.grade;
        user.role = data.role;
        if (data.password) {
            user.password = data.password;
        }
        await user.save();
        return {
            message: 'User updated successfully',
            user,
        };
    }
    async destroy({ params }) {
        const user = await User_1.default.find(params.id);
        if (!user) {
            throw new NotFoundException_1.default('User is not found');
        }
        await user.delete();
        return {
            message: 'User deleted successfully',
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map