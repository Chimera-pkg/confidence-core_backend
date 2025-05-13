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
const luxon_1 = require("luxon");
const User_1 = __importDefault(require("./User"));
class Schedule extends Orm_1.BaseModel {
    static initializeBadges(schedule) {
        if (!schedule.badges) {
            schedule.badges = [];
        }
    }
    isMilestone() {
        return Schedule.streakMilestones.includes(this.streakCount);
    }
    resetStreak() {
        this.streakCount = 0;
    }
    addBadge() {
        if (this.isMilestone()) {
            const badge = `${this.streakCount}-day streak`;
            if (!this.badges.includes(badge)) {
                this.badges.push(badge);
            }
        }
    }
}
Schedule.streakMilestones = [3, 7, 14, 21, 30];
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Schedule.prototype, "userId", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Object)
], Schedule.prototype, "days", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Schedule.prototype, "streakCount", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], Schedule.prototype, "lastLoginDate", void 0);
__decorate([
    Orm_1.column.date(),
    __metadata("design:type", Object)
], Schedule.prototype, "lastJournalDate", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Array)
], Schedule.prototype, "badges", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default),
    __metadata("design:type", Object)
], Schedule.prototype, "user", void 0);
__decorate([
    Orm_1.beforeSave(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Schedule]),
    __metadata("design:returntype", void 0)
], Schedule, "initializeBadges", null);
exports.default = Schedule;
//# sourceMappingURL=Schedule.js.map