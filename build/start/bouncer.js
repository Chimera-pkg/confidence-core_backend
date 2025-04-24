"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.policies = exports.actions = void 0;
const Bouncer_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Bouncer"));
exports.actions = Bouncer_1.default.actions;
exports.policies = Bouncer_1.default.registerPolicies({
    ManufacturerPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ManufacturerPolicy'))),
    ProductPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductPolicy'))),
    ProductQAPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductQAPolicy'))),
    ProductWorkflowPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductWorkflowPolicy'))),
    ProductSpecificationPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductSpecificationPolicy'))),
    ProductClinicalApplicationPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductClinicalApplicationPolicy'))),
    ProductUserManualPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductUserManualPolicy'))),
    HealthcarePolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/HealthcarePolicy'))),
    ProductComparisonPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductComparisonPolicy'))),
    ProductMediaPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductMediaPolicy'))),
    NewsPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/NewsPolicy'))),
    GovAffairPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/GovAffairPolicy'))),
    UserPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/UserPolicy'))),
    RegulationServiceCategoryPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/RegulationServiceCategoryPolicy'))),
    RegulationServicePolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/RegulationServicePolicy'))),
    MarketingServiceCategoryPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/MarketingServiceCategoryPolicy'))),
    MarketingServicePolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/MarketingServicePolicy'))),
    IndustryCategoryPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/IndustryCategoryPolicy'))),
    ProductCategoryPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ProductCategoryPolicy'))),
    RegulationAssessmentPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/RegulationAssessmentPolicy'))),
    ServiceCategoryPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceCategoryPolicy'))),
    ServicePolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServicePolicy'))),
    ServiceMediaPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceMediaPolicy'))),
    ServiceUserManualPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceUserManualPolicy'))),
    ServiceQAPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceQAPolicy'))),
    ServiceClinicalApplicationPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceClinicalApplicationPolicy'))),
    ServiceWorkflowPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceWorkflowPolicy'))),
    ServiceSpecificationPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceSpecificationPolicy'))),
    ServiceComparisonPolicy: () => Promise.resolve().then(() => __importStar(global[Symbol.for('ioc.use')]('App/Policies/ServiceComparisonPolicy'))),
}).policies;
//# sourceMappingURL=bouncer.js.map