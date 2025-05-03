"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.group(() => {
        Route_1.default.post('/login', 'AuthController.login');
        Route_1.default.post('/google/manufacturer', 'AuthController.loginManufacturerWithGoogle');
        Route_1.default.post('/google/healthcare', 'AuthController.loginHealthcareWithGoogle');
        Route_1.default.post('/register/admin', 'AuthController.registerAdmin');
        Route_1.default.post('/register/user', 'AuthController.registerUser');
        Route_1.default.post('/register/send-email-verification', 'AuthController.sendEmailVerification');
        Route_1.default.put('/update-verification-status', 'AuthController.updateVerificationStatus');
        Route_1.default.get('/verify/:email', 'AuthController.verifyEmail').as('verifyEmail');
        Route_1.default.get('/connect/google', async ({ ally }) => {
            return ally.use('google').redirect();
        });
        Route_1.default.get('/connect/google/callback', async ({ ally }) => {
            const google = ally.use('google');
            if (google.accessDenied()) {
                return 'Access was denied';
            }
            if (google.stateMisMatch()) {
                return 'Request expired. Retry again';
            }
            if (google.hasError()) {
                return google.getError();
            }
            const user = await google.user();
            return user;
        });
    }).prefix('auth');
}).prefix('v1');
//# sourceMappingURL=auth.js.map