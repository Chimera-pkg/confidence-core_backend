"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
require("./routes/v1");
Route_1.default.get('/:token', async ({ ally, request }) => {
    const token = request.param('token');
    console.log('token', token);
    const user = await ally.use('google').userFromToken(token);
    return { hello: 'world', user, token };
});
//# sourceMappingURL=routes.js.map