"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('nav-logs', 'v1/NavigationLogController.index').middleware('auth:api');
    Route_1.default.post('nav-logs', 'v1/NavigationLogController.store').middleware('auth:api');
}).prefix('v1');
//# sourceMappingURL=nav-logs.js.map