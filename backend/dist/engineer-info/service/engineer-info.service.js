"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineerInfoService = void 0;
const common_1 = require("@nestjs/common");
let EngineerInfoService = class EngineerInfoService {
    create(createEngineerInfoDto) {
        return 'This action adds a new engineerInfo';
    }
    findAll() {
        return `This action returns all engineerInfo`;
    }
    findOne(id) {
        return `This action returns a #${id} engineerInfo`;
    }
    update(id, updateEngineerInfoDto) {
        return `This action updates a #${id} engineerInfo`;
    }
    remove(id) {
        return `This action removes a #${id} engineerInfo`;
    }
};
exports.EngineerInfoService = EngineerInfoService;
exports.EngineerInfoService = EngineerInfoService = __decorate([
    (0, common_1.Injectable)()
], EngineerInfoService);
//# sourceMappingURL=engineer-info.service.js.map