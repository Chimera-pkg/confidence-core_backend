"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Drive_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Drive"));
const LeaderboardsController_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/LeaderboardsController"));
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
        const leaderboardController = new LeaderboardsController_1.default();
        const leaderboard = await leaderboardController.index({});
        const userRank = leaderboard.find((entry) => entry.id === auth.user.id)?.rank || null;
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
            rank: userRank,
        };
    }
    async changeUsername({ auth, request }) {
        const username = request.input('username');
        const user = await User_1.default.findOrFail(auth.user.id);
        user.username = username;
        await user.save();
        return { message: 'Username updated', username };
    }
    async changePassword({ auth, request }) {
        const password = request.input('password');
        const user = await User_1.default.findOrFail(auth.user.id);
        user.password = password;
        await user.save();
        return { message: 'Password updated' };
    }
    async updateAvatar({ auth, request }) {
        const avatar = request.file('avatar_url', {
            extnames: ['jpg', 'png', 'jpeg', 'PNG'],
            size: '2mb',
        });
        if (!avatar) {
            return { message: 'Please upload a valid avatar file' };
        }
        const subfolder = 'avatars';
        await avatar.moveToDisk(subfolder);
        const serverBaseUrl = 'http://103.196.155.157:3335';
        const path = await Drive_1.default.getUrl(`${subfolder}/${avatar.fileName}`);
        const url = serverBaseUrl + path;
        const profile = await Profile_1.default.findByOrFail('user_id', auth.user.id);
        profile.avatarUrl = url;
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