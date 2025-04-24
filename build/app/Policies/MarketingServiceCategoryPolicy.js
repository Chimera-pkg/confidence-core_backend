"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
class MarketingServiceCategoryPolicy extends Bouncer_1.BasePolicy {
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
exports.default = MarketingServiceCategoryPolicy;
//# sourceMappingURL=MarketingServiceCategoryPolicy.js.map