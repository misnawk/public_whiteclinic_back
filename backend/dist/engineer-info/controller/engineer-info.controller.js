"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineerInfoController = void 0;
const common_1 = require("@nestjs/common");
const engineer_info_service_1 = require("../service/engineer-info.service");
const create_engineer_info_dto_1 = require("../dto/create-engineer-info.dto");
const update_engineer_info_dto_1 = require("../dto/update-engineer-info.dto");
let EngineerInfoController = class EngineerInfoController {
    constructor(engineerInfoService) {
        this.engineerInfoService = engineerInfoService;
    }
    create(createEngineerInfoDto) {
        return this.engineerInfoService.create(createEngineerInfoDto);
    }
    findAll() {
        return this.engineerInfoService.findAll();
    }
    findOne(id) {
        return this.engineerInfoService.findOne(+id);
    }
    update(id, updateEngineerInfoDto) {
        return this.engineerInfoService.update(+id, updateEngineerInfoDto);
    }
    remove(id) {
        return this.engineerInfoService.remove(+id);
    }
};
exports.EngineerInfoController = EngineerInfoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_engineer_info_dto_1.CreateEngineerInfoDto]),
    __metadata("design:returntype", void 0)
], EngineerInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EngineerInfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EngineerInfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_engineer_info_dto_1.UpdateEngineerInfoDto]),
    __metadata("design:returntype", void 0)
], EngineerInfoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EngineerInfoController.prototype, "remove", null);
exports.EngineerInfoController = EngineerInfoController = __decorate([
    (0, common_1.Controller)('engineer-info'),
    __metadata("design:paramtypes", [engineer_info_service_1.EngineerInfoService])
], EngineerInfoController);
//# sourceMappingURL=engineer-info.controller.js.map