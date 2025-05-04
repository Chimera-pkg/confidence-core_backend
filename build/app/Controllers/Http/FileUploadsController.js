"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Drive_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Drive"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const CreateFileUploadValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateFileUploadValidator"));
const FileUpload_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/FileUpload"));
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
class FileUploadsController {
    async index({ request }) {
        const page = request.input('page', 1);
        const limit = request.input('limit', 10);
        const fileUploads = await FileUpload_1.default.query().paginate(page, limit);
        fileUploads.baseUrl(`/file-uploads`);
        return fileUploads;
    }
    async store({ request }) {
        await request.validate(CreateFileUploadValidator_1.default);
        const file = request.file('file');
        const subfolder = 'file-upload';
        await file.moveToDisk(subfolder);
        const serverBaseUrl = Env_1.default.get('SERVER_BASEURL');
        const path = await Drive_1.default.getUrl(`${subfolder}/${file.fileName}`);
        const url = serverBaseUrl + path;
        const fileUpload = await FileUpload_1.default.create({
            name: `${subfolder}/${file.fileName}`,
            extname: file.extname,
            type: file.type,
            size: file.size,
            path,
            url,
        });
        return fileUpload;
    }
    async show({ request }) {
        const id = request.param('id');
        const fileUpload = await FileUpload_1.default.find(id);
        if (!fileUpload) {
            throw new NotFoundException_1.default('File upload is not found');
        }
        fileUpload.serialize({
            fields: {
                omit: ['name', 'size', 'path'],
            },
        });
        return fileUpload;
    }
}
exports.default = FileUploadsController;
//# sourceMappingURL=FileUploadsController.js.map