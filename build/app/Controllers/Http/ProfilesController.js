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
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const fs = __importStar(require("fs"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class ProfilesController {
    async show({ auth }) {
        let profile = await Profile_1.default.query()
            .whereHas('user', (query) => {
            query.where('username', auth.user.username);
        })
            .preload('xpMeter')
            .preload('schedule')
            .preload('user')
            .first();
        if (!profile) {
            profile = await Profile_1.default.create({
                userId: auth.user.id,
                avatarUrl: null,
            });
        }
        return {
            avatarUrl: profile.avatarUrl,
            level: profile.xpMeter?.level || 1,
            xp: profile.xpMeter?.xp || 0,
            streakCount: profile.schedule?.streakCount || 0,
            journalCount: profile.schedule?.days
                ? Object.values(profile.schedule.days).filter(Boolean).length
                : 0,
            grade: profile.user?.grade || 'N/A',
            age: profile.user?.age || 'N/A',
            username: profile.user?.username || 'N/A',
        };
    }
    async uploadAvatar({ auth, request }) {
        const avatar = request.file('avatar_url', {
            extnames: ['jpg', 'png', 'jpeg', 'PNG'],
            size: '5mb',
        });
        if (!avatar) {
            return { message: 'Please upload a valid avatar file' };
        }
        const uploadPath = Application_1.default.publicPath('uploads/avatars');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        const fileName = `${auth.user.id}_${new Date().getTime()}.${avatar.extname}`;
        await avatar.move(uploadPath, { name: fileName });
        const baseUrl = Env_1.default.get('APP_BASE_URL');
        const profile = await Profile_1.default.findByOrFail('user_id', auth.user.id);
        profile.avatarUrl = `${baseUrl}/uploads/avatars/${fileName}`;
        await profile.save();
        return { message: 'Avatar uploaded successfully', avatarUrl: profile.avatarUrl };
    }
    async updateAvatar({ auth, request }) {
        const avatar = request.file('avatar_url', {
            extnames: ['jpg', 'png', 'jpeg', 'PNG'],
            size: '2mb',
        });
        if (!avatar) {
            return { message: 'Please upload a valid avatar file' };
        }
        const uploadPath = Application_1.default.publicPath('uploads/avatars');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        const fileName = `${auth.user.id}_${new Date().getTime()}.${avatar.extname}`;
        await avatar.move(uploadPath, { name: fileName });
        const baseUrl = Env_1.default.get('APP_BASE_URL');
        const profile = await Profile_1.default.findByOrFail('user_id', auth.user.id);
        profile.avatarUrl = `${baseUrl}/uploads/avatars/${fileName}`;
        await profile.save();
        return { message: 'Avatar updated successfully', avatarUrl: profile.avatarUrl };
    }
    async store({ request }) {
        const data = request.only(['userId', 'avatarUrl']);
        const profile = await Profile_1.default.create(data);
        return profile;
    }
    async destroy({ params }) {
        const profile = await Profile_1.default.findOrFail(params.id);
        await profile.delete();
        return { message: 'Profile deleted successfully' };
    }
    async update({ auth, request }) {
        const profile = await Profile_1.default.query()
            .whereHas('user', (query) => {
            query.where('username', auth.user.username);
        })
            .firstOrFail();
        const data = request.only(['avatarUrl']);
        profile.merge(data);
        await profile.save();
        return profile;
    }
}
exports.default = ProfilesController;
//# sourceMappingURL=ProfilesController.js.map