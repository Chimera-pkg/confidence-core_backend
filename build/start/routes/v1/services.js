"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource('services', 'ServicesController').middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('services.media', 'ServiceMediasController')
        .only(['index', 'store', 'destroy'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
    });
    Route_1.default.resource('services.user-manuals', 'ServiceUserManualsController')
        .only(['index', 'store', 'destroy'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
    });
    Route_1.default.resource('services.question-answers', 'ServiceQAsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('services.workflows', 'ServiceWorkflowsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('services.specifications', 'ServiceSpecificationsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('services.clinical-applications', 'ServiceClinicalApplicationsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('services.comparisons', 'ServiceComparisonsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
}).prefix('v1');
//# sourceMappingURL=services.js.map