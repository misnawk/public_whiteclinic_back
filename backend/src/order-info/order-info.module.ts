import { Module } from '@nestjs/common';
import { OrderInfoService } from './order-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderData } from './entities/OrderData.entity';
import { OrderInfoController } from './order-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderData])],
  controllers: [OrderInfoController],
  providers: [OrderInfoService],
  exports: [TypeOrmModule],
})
export class OrderInfoModule {}
