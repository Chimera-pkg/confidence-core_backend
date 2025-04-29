"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('xp', 'XpMetersController.show').middleware('auth:api');
    Route_1.default.put('xp', 'XpMetersController.update').middleware('auth:api');
}).prefix('v1');
//# sourceMappingURL=xp-meter.js.map