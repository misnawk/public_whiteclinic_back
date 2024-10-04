import { Module } from '@nestjs/common';
import { OrderInfoController } from './order-info.controller';
import { OrderInfoService } from './order-info.service';

@Module({
  controllers: [OrderInfoController],
  providers: [OrderInfoService],
})
export class OrderInfoModule {}
