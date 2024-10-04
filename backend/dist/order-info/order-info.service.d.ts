import { OrderData } from './entities/OrderData.entity';
import { SubmitOrderDto } from './dto/submit-order.dto';
export declare class OrderInfoService {
    private orderDatas;
    getAll(): OrderData[];
    getOne(id: number): OrderData;
    create(orderInfo: SubmitOrderDto): void;
    remove(id: number): void;
    moveTo(link: string): void;
}
