"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
class RegulationAssessmentPolicy extends Bouncer_1.BasePolicy {
    viewList(user) {
        return user.isAdmin();
    }
    async view(user, regulationAssessment) {
        if (user && user.isManufacturer() && user.id === regulationAssessment.manufacturer.userId) {
            return true;
        }
        if (user?.isAdmin()) {
            return true;
        }
        return false;
    }
    async create(user) {
        return user.isManufacturer();
    }
    async update(user) {
        return user.isAdmin();
    }
    async delete(user) {
        return user.isAdmin();
    }
}
exports.default = RegulationAssessmentPolicy;
//# sourceMappingURL=RegulationAssessmentPolicy.js.map