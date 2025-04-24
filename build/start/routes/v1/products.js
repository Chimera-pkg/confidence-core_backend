"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource('products', 'ProductsController').middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('products.media', 'ProductMediasController')
        .only(['index', 'store', 'destroy'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
    });
    Route_1.default.resource('products.user-manuals', 'ProductUserManualsController')
        .only(['index', 'store', 'destroy'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
    });
    Route_1.default.resource('products.question-answers', 'ProductQAsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('products.workflows', 'ProductWorkflowsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('products.specifications', 'ProductSpecificationsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('products.clinical-applications', 'ProductClinicalApplicationsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
    Route_1.default.resource('products.comparisons', 'ProductComparisonsController')
        .only(['index', 'store', 'destroy', 'update'])
        .middleware({
        store: ['auth:api'],
        destroy: ['auth:api'],
        update: ['auth:api'],
    });
}).prefix('v1');
//# sourceMappingURL=products.js.map