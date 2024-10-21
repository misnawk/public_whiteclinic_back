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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineerDailyearnings = void 0;
const typeorm_1 = require("typeorm");
let EngineerDailyearnings = class EngineerDailyearnings {
};
exports.EngineerDailyearnings = EngineerDailyearnings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], EngineerDailyearnings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'engineer_id' }),
    __metadata("design:type", Number)
], EngineerDailyearnings.prototype, "engineerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', type: 'date' }),
    __metadata("design:type", String)
], EngineerDailyearnings.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'daily_amount' }),
    __metadata("design:type", Number)
], EngineerDailyearnings.prototype, "daily_amount", void 0);
exports.EngineerDailyearnings = EngineerDailyearnings = __decorate([
    (0, typeorm_1.Entity)('engineer_dailyearnings')
], EngineerDailyearnings);
//# sourceMappingURL=engineer-dailyearnings.entity.js.map