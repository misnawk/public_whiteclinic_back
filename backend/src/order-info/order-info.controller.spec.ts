import { Test, TestingModule } from '@nestjs/testing';
import { OrderInfoController } from './order-info.controller';

describe('OrderInfoController', () => {
  let controller: OrderInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderInfoController],
    }).compile();

    controller = module.get<OrderInfoController>(OrderInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
