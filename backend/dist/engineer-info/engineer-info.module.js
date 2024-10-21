"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineerInfoModule = void 0;
const common_1 = require("@nestjs/common");
const engineer_info_controller_1 = require("./controller/engineer-info.controller");
const engineer_info_service_1 = require("./service/engineer-info.service");
const typeorm_1 = require("@nestjs/typeorm");
const engineer_info_entity_1 = require("./entities/engineer-info.entity");
const engineer_dailyearnings_entity_1 = require("./entities/engineer-dailyearnings.entity");
const engineer_payDay_entity_1 = require("./entities/engineer-payDay.entity");
let EngineerInfoModule = class EngineerInfoModule {
};
exports.EngineerInfoModule = EngineerInfoModule;
exports.EngineerInfoModule = EngineerInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([engineer_info_entity_1.Engineer, engineer_dailyearnings_entity_1.EngineerDailyearnings, engineer_payDay_entity_1.EngineerPayDay]),
        ],
        controllers: [engineer_info_controller_1.EngineerInfoController],
        providers: [engineer_info_service_1.EngineerInfoService],
    })
], EngineerInfoModule);
//# sourceMappingURL=engineer-info.module.js.map