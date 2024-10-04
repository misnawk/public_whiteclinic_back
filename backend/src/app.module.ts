import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { OrderInfoModule } from './order-info/order-info.module';

@Module({
  imports: [OrderInfoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
