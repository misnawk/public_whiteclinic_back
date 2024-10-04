import { SubmitOrderDto } from './dto/submit-order.dto';
import { OrderInfoService } from './order-info.service';
import { OrderData } from './entities/OrderData.entity';
export declare class OrderInfoController {
    private readonly orderService;
    constructor(orderService: OrderInfoService);
    getAll(): Promise<OrderData[]>;
    search(searchingId: number): string;
    getOne(orderId: number): OrderData;
    create(orderData: SubmitOrderDto): void;
    remove(orderId: number): void;
    moveTo(link: string): string;
}
