"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
class UserPolicy extends Bouncer_1.BasePolicy {
    async viewList(user) {
        return user.isAdmin();
    }
    async view(user) {
        return user.isAdmin();
    }
    async create(user) {
        return user.isAdmin();
    }
    async update(user) {
        return user.isAdmin();
    }
    async delete(user) {
        return user.isAdmin();
    }
}
exports.default = UserPolicy;
//# sourceMappingURL=UserPolicy.js.map