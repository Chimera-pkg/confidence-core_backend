"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
class IndustryCategoryPolicy extends Bouncer_1.BasePolicy {
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
exports.default = IndustryCategoryPolicy;
//# sourceMappingURL=IndustryCategoryPolicy.js.map