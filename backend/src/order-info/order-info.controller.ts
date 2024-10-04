import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { SubmitOrderDto } from './dto/submit-order.dto';
import { OrderInfoService } from './order-info.service';
import { OrderData } from './entities/OrderData.entity';

@Controller('orderInfo')
export class OrderInfoController {
  constructor(private readonly orderService: OrderInfoService) {}

  @Get()
  async getAll(): Promise<OrderData[]> {
    return this.orderService.getAll();
  }

  @Get('search')
  search(@Query('id') searchingId: number) {
    return `We are searching for a orderData id matched with ${searchingId}`;
  }

  @Get('/:id')
  getOne(@Param('id') orderId: number) {
    return this.orderService.getOne(orderId);
  }

  @Post()
  create(@Body() orderData: SubmitOrderDto) {
    return this.orderService.create(orderData);
  }

  @Delete('/:id')
  remove(@Param('id') orderId: number) {
    return this.orderService.remove(orderId);
  }

  @Get('/:link')
  moveTo(@Query('http://localhost:3000/customers/c_list') link: string) {
    return link;
  }
}
