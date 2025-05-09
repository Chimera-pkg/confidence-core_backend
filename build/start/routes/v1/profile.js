"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('profile', 'ProfilesController.show').middleware('auth:api');
    Route_1.default.put('profile', 'ProfilesController.update').middleware('auth:api');
    Route_1.default.post('profile', 'ProfilesController.store').middleware('auth:api');
    Route_1.default.delete('profile/:id', 'ProfilesController.destroy').middleware('auth:api');
}).prefix('v1');
//# sourceMappingURL=profile.js.map