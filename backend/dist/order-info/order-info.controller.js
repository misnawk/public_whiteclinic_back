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
const swagger_1 = require("@nestjs/swagger");
let OrderInfoController = class OrderInfoController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getAll() {
        return this.orderService.getAll();
    }
    async getAllInfos() {
        return this.orderService.findAll();
    }
    async search(searchingId) {
        return `We are searching for a orderData id matched with ${searchingId}`;
    }
    async getOne(orderId) {
        return this.orderService.getOne(orderId);
    }
    async create(orderData) {
        return this.orderService.create(orderData);
    }
    async remove(orderId) {
        return this.orderService.remove(orderId);
    }
    async toSwaggerUI() {
        return { url: 'http://localhost:8000/orderInfo/getAll' };
    }
    findAll(res) {
        res.status(common_1.HttpStatus.OK).json([' library-specific response object test']);
    }
};
exports.OrderInfoController = OrderInfoController;
__decorate([
    (0, common_1.Get)('getAll'),
    (0, swagger_1.ApiOperation)({
        summary: '주문정보 전체조회 API',
        description: '모든 주문정보를 불러온다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('getAllInfo'),
    (0, swagger_1.ApiOperation)({
        summary: 'DB 내부 정보 전체조회 API',
        description: 'vercel db 연결 테스트용 API.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "getAllInfos", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({
        summary: 'id 파라미터 확인 API',
        description: 'id 파라미터 값을 반환한다.',
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('searchBy:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'id 기반 주문정보 조회 API',
        description: 'id 파라미터와 매치되는 주문정보를 불러온다.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('createOrder'),
    (0, swagger_1.ApiOperation)({
        summary: '주문정보 등록 API',
        description: '주문정보를 생성한다.',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '주문정보를 생성한다.',
        type: submit_order_dto_1.SubmitOrderDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [submit_order_dto_1.SubmitOrderDto]),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('deleteBy:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'id 기반 주문정보 삭제 API',
        description: 'id 파라미터와 매치되는 주문정보를 DB에서 삭제한다.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('redirectTest'),
    (0, common_1.Redirect)('http://localhost:8000/orderInfo/getAll', 302),
    (0, swagger_1.ApiOperation)({
        summary: 'getAll GET 메서드 리디렉트 API',
        description: '리디렉트 테스트 API',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderInfoController.prototype, "toSwaggerUI", null);
__decorate([
    (0, common_1.Get)('responseObject'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderInfoController.prototype, "findAll", null);
exports.OrderInfoController = OrderInfoController = __decorate([
    (0, common_1.Controller)('orderInfo'),
    (0, swagger_1.ApiTags)('주문정보 API'),
    __metadata("design:paramtypes", [order_info_service_1.OrderInfoService])
], OrderInfoController);
//# sourceMappingURL=order-info.controller.js.map