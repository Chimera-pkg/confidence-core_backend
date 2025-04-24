"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource('regulation-assessments', 'RegulationAssessmentsController').only([
        'index',
        'show',
        'store',
        'update',
    ]);
})
    .prefix('v1')
    .middleware(['auth:api']);
//# sourceMappingURL=regulation-assessments.js.map