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
exports.OrderInfoController = void 0;
const common_1 = require("@nestjs/common");
const submit_order_dto_1 = require("./dto/submit-order.dto");
const order_info_service_1 = require("./order-info.service");
let OrderInfoController = class OrderInfoController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getAll() {
        return this.orderService.getAll();
    }
    search(searchingId) {
        return `We are searching for a orderData id matched with ${searchingId}`;
    }
    getOne(orderId) {
        return this.orderService.getOne(orderId);
    }
    create(orderData) {
        return this.orderService.create(orderData);
    }
    remove(orderId) {
        return this.orderService.remove(orderId);
    }
    moveTo(link) {
        return link;
    }
};
exports.OrderInfoController = OrderInfoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [submit_order_dto_1.SubmitOrderDto]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/:link'),
    __param(0, (0, common_1.Query)('http://localhost:3000/customers/c_list')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "moveTo", null);
exports.OrderInfoController = OrderInfoController = __decorate([
    (0, common_1.Controller)('orderInfo'),
    __metadata("design:paramtypes", [order_info_service_1.OrderInfoService])
], OrderInfoController);
//# sourceMappingURL=order-info.controller.js.map