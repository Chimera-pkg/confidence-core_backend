"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
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