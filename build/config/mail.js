"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const mailConfig = {
    mailer: 'smtp',
    mailers: {
        smtp: {
            driver: 'smtp',
            host: Env_1.default.get('SMTP_HOST'),
            port: Env_1.default.get('SMTP_PORT'),
            auth: {
                user: Env_1.default.get('SMTP_USERNAME'),
                pass: Env_1.default.get('SMTP_PASSWORD'),
                type: 'login',
            },
        },
        ses: {
            driver: 'ses',
            apiVersion: '2010-12-01',
            key: Env_1.default.get('SES_ACCESS_KEY'),
            secret: Env_1.default.get('SES_ACCESS_SECRET'),
            region: Env_1.default.get('SES_REGION'),
            sslEnabled: true,
            sendingRate: 10,
            maxConnections: 5,
        },
    },
};
exports.default = mailConfig;
//# sourceMappingURL=mail.js.map