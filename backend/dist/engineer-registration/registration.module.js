"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const registration_service_1 = require("./service/registration.service");
const registration_controller_1 = require("./controller/registration.controller");
const typeorm_1 = require("@nestjs/typeorm");
const engineer_info_entity_1 = require("../engineer-info/entities/engineer-info.entity");
const skill_entity_1 = require("./entities/skill.entity");
const engineer_commissionRates_entity_1 = require("../engineer-info/entities/engineer-commissionRates.entity");
const Engineer_skill_entity_1 = require("./entities/Engineer_skill.entity");
const commissionRates_entity_1 = require("./entities/commissionRates.entity");
const specialHolidays_entity_1 = require("./entities/specialHolidays.entity");
const weekDay_entity_1 = require("./entities/weekDay.entity");
const reaularHolidays_entity_1 = require("./entities/reaularHolidays.entity");
let RegistrationModule = class RegistrationModule {
};
exports.RegistrationModule = RegistrationModule;
exports.RegistrationModule = RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                engineer_info_entity_1.Engineer,
                skill_entity_1.Skill,
                engineer_commissionRates_entity_1.EngineerCommissionRates,
                Engineer_skill_entity_1.EngineerSkill,
                commissionRates_entity_1.CommissionRates,
                specialHolidays_entity_1.SpecialHolidays,
                weekDay_entity_1.WeekDays,
                reaularHolidays_entity_1.RegularHolidays,
            ]),
        ],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService],
    })
], RegistrationModule);
//# sourceMappingURL=registration.module.js.map