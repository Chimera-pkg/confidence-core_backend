"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('badges/:id', 'BadgesController.index').middleware('auth:api');
    Route_1.default.get('badges', 'BadgesController').middleware('auth:api');
    Route_1.default.post('badges', 'BadgesController.store').middleware('auth:api');
}).prefix('v1');
//# sourceMappingURL=badge.js.map