"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('schedule', 'SchedulesController.show').middleware('auth:api');
    Route_1.default.post('schedule', 'SchedulesController.store').middleware('auth:api');
    Route_1.default.delete('schedule', 'SchedulesController.delete').middleware('auth:api');
    Route_1.default.post('schedule/daily-login', 'SchedulesController.dailyLogin').middleware('auth:api');
}).prefix('v1');
//# sourceMappingURL=schedule.js.map