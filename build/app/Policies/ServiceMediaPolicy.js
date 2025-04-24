"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Bouncer_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer");
const Service_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Service"));
class ServiceMediaPolicy extends Bouncer_1.BasePolicy {
    async viewList(user, service) {
        if (user && user.isManufacturer() && user.id === service.manufacturer.userId) {
            return true;
        }
        if (service.isPublished) {
            return true;
        }
        return false;
    }
    async create(user, service) {
        if (user.isManufacturer() && user.id === service.manufacturer.userId) {
            return true;
        }
        return false;
    }
    async delete(user, service) {
        if (user.isManufacturer() && user.id === service.manufacturer.userId) {
            return true;
        }
        return false;
    }
}
__decorate([
    Bouncer_1.action({ allowGuest: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof Service_1.default !== "undefined" && Service_1.default) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ServiceMediaPolicy.prototype, "viewList", null);
exports.default = ServiceMediaPolicy;
//# sourceMappingURL=ServiceMediaPolicy.js.map