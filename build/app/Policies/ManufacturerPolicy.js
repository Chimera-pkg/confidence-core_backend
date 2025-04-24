"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
const User_1 = global[Symbol.for('ioc.use')]("App/Models/User");
class ManufacturerPolicy extends Bouncer_1.BasePolicy {
    async getProfile(user) {
        return user.role === User_1.UserRole.manufacturer;
    }
    async updateProfile(user) {
        return user.role === User_1.UserRole.manufacturer;
    }
}
exports.default = ManufacturerPolicy;
//# sourceMappingURL=ManufacturerPolicy.js.map