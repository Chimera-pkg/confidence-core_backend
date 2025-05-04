"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Mail");
const View_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/View"));
class VerifyEmail extends Mail_1.BaseMailer {
    constructor(subject, to, username, verificationUrl, resendVerificationUrl, password) {
        super();
        this.subject = subject;
        this.to = to;
        this.html = this.generateHtml(username, verificationUrl, resendVerificationUrl, password);
    }
    generateHtml(username, url, resendUrl, password) {
        return View_1.default.renderSync('emails/verify_email', {
            data: { username, url, resendUrl, password },
        });
    }
    prepare(message) {
        message.subject(this.subject).from('support@sahabatkebaikan.org').to(this.to).html(this.html);
    }
}
exports.default = VerifyEmail;
//# sourceMappingURL=VerifyEmail.js.map