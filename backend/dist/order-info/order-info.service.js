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
exports.OrderInfoService = void 0;
const common_1 = require("@nestjs/common");
let OrderInfoService = class OrderInfoService {
    constructor() {
        this.orderDatas = [];
    }
    getAll() {
        return this.orderDatas;
    }
    getOne(id) {
        console.log('id type : ' + typeof id);
        const order = this.orderDatas.find((order) => order.id === +id);
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID: ${id} not found`);
        }
        return order;
    }
    create(orderInfo) {
        this.orderDatas.push({
            id: this.orderDatas.length + 1,
            ...orderInfo,
        });
    }
    remove(id) {
        this.getOne(id);
        this.orderDatas = this.orderDatas.filter((order) => order.id !== +id);
    }
    moveTo(link) {
        (0, common_1.Redirect)(link);
    }
};
exports.OrderInfoService = OrderInfoService;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], OrderInfoService.prototype, "getAll", null);
exports.OrderInfoService = OrderInfoService = __decorate([
    (0, common_1.Injectable)()
], OrderInfoService);
//# sourceMappingURL=order-info.service.js.map