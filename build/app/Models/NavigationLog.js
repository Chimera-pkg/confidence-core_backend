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
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const User_1 = __importDefault(require("./User"));
const uuid_1 = require("uuid");
class NavigationLog extends Orm_1.BaseModel {
    static assignUuid(log) {
        log.id = uuid_1.v4();
    }
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", String)
], NavigationLog.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], NavigationLog.prototype, "userId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], NavigationLog.prototype, "url", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], NavigationLog.prototype, "visitedAt", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default),
    __metadata("design:type", Object)
], NavigationLog.prototype, "user", void 0);
__decorate([
    Orm_1.beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NavigationLog]),
    __metadata("design:returntype", void 0)
], NavigationLog, "assignUuid", null);
exports.default = NavigationLog;
//# sourceMappingURL=NavigationLog.js.map