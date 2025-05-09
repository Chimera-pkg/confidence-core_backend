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
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const User_1 = __importDefault(require("./User"));
const XpMeter_1 = __importDefault(require("./XpMeter"));
const Schedule_1 = __importDefault(require("./Schedule"));
class Profile extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Profile.prototype, "userId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Profile.prototype, "avatarUrl", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default),
    __metadata("design:type", Object)
], Profile.prototype, "user", void 0);
__decorate([
    Orm_1.hasOne(() => XpMeter_1.default, { foreignKey: 'userId' }),
    __metadata("design:type", Object)
], Profile.prototype, "xpMeter", void 0);
__decorate([
    Orm_1.hasOne(() => Schedule_1.default, { foreignKey: 'userId' }),
    __metadata("design:type", Object)
], Profile.prototype, "schedule", void 0);
exports.default = Profile;
//# sourceMappingURL=Profile.js.map