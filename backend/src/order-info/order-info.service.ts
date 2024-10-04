import { Get, Injectable, NotFoundException, Redirect } from '@nestjs/common';
import { OrderData } from './entities/OrderData.entity';
import { SubmitOrderDto } from './dto/submit-order.dto';

@Injectable()
export class OrderInfoService {
  private orderDatas: OrderData[] = [];

  @Get()
  getAll(): OrderData[] {
    return this.orderDatas;
  }

  getOne(id: number): OrderData {
    console.log('id type : ' + typeof id);
    // NOTE: 파라미터로 들어오는 값이 string 일 경우 정상적으로 인식되지 않음 !!
    // + 연산자를 붙이거나 타입변환이 이루어지도록 해야한다.
    const order = this.orderDatas.find((order) => order.id === +id);
    if (!order) {
      throw new NotFoundException(`Order with ID: ${id} not found`);
    }

    return order;
  }

  create(orderInfo: SubmitOrderDto) {
    this.orderDatas.push({
      id: this.orderDatas.length + 1,
      ...orderInfo,
    });
  }

  remove(id: number) {
    this.getOne(id);
    this.orderDatas = this.orderDatas.filter((order) => order.id !== +id);
  }

  moveTo(link: string) {
    Redirect(link);
  }
}
