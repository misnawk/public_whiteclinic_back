import { SubmitOrderDto } from './dto/submit-order.dto';
import { OrderInfoService } from './order-info.service';
import { OrderData } from './entities/OrderData.entity';
import { Response } from 'express';
export declare class OrderInfoController {
    private readonly orderService;
    constructor(orderService: OrderInfoService);
    getAll(): Promise<OrderData[]>;
    getAllInfos(): Promise<SubmitOrderDto[]>;
    search(searchingId: number): Promise<string>;
    getOne(orderId: number): Promise<OrderData>;
    create(orderData: SubmitOrderDto): Promise<void>;
    remove(orderId: number): Promise<void>;
    toSwaggerUI(): Promise<any>;
    findAll(res: Response): void;
}
