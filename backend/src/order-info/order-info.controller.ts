import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { SubmitOrderDto } from './dto/submit-order.dto';
import { OrderInfoService } from './order-info.service';
import { OrderData } from './entities/OrderData.entity';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('orderInfo')
@ApiTags('주문정보 API')
export class OrderInfoController {
  constructor(private readonly orderService: OrderInfoService) {}

  @Get('getAll')
  @ApiOperation({
    summary: '주문정보 전체조회 API',
    description: '모든 주문정보를 불러온다.',
  })
  async getAll(): Promise<OrderData[]> {
    return this.orderService.getAll();
  }

  @Get('getAllInfo')
  @ApiOperation({
    summary: 'DB 내부 정보 전체조회 API',
    description: 'vercel db 연결 테스트용 API.',
  })
  async getAllInfos(): Promise<SubmitOrderDto[]> {
    return this.orderService.findAll();
  }

  @Get('search')
  @ApiOperation({
    summary: 'id 파라미터 확인 API',
    description: 'id 파라미터 값을 반환한다.',
  })
  async search(@Query('id') searchingId: number): Promise<string> {
    return `We are searching for a orderData id matched with ${searchingId}`;
  }

  @Get('searchBy:id')
  @ApiOperation({
    summary: 'id 기반 주문정보 조회 API',
    description: 'id 파라미터와 매치되는 주문정보를 불러온다.',
  })
  async getOne(@Param('id') orderId: number): Promise<OrderData> {
    return this.orderService.getOne(orderId);
  }

  //TODO : 차후 DB에서 ID 조회 후 내용 수정하는 SQL 문 작성 필요
  // @Post('updateOrderBy:id')
  // @ApiOperation({
  //   summary: 'id 기반 주문정보 수정',
  //   description: 'id 파라미터와 매치되는 주문정보를 DB 에서 찾아 수정한다.',
  // })
  // async updateOne(@Param('id') orderId: number): Promise<OrderData> {
  //   return this.orderService.
  // }

  @Post('createOrder')
  @ApiOperation({
    summary: '주문정보 등록 API',
    description: '주문정보를 생성한다.',
  })
  @ApiCreatedResponse({
    description: '주문정보를 생성한다.',
    type: SubmitOrderDto,
  })
  async create(@Body() orderData: SubmitOrderDto): Promise<void> {
    return this.orderService.create(orderData);
  }

  @Delete('deleteBy:id')
  @ApiOperation({
    summary: 'id 기반 주문정보 삭제 API',
    description: 'id 파라미터와 매치되는 주문정보를 DB에서 삭제한다.',
  })
  async remove(@Param('id') orderId: number): Promise<void> {
    return this.orderService.remove(orderId);
  }

  @Get('redirectTest')
  @Redirect('http://localhost:8000/orderInfo/getAll', 302)
  @ApiOperation({
    summary: 'getAll GET 메서드 리디렉트 API',
    description: '리디렉트 테스트 API',
  })
  async toSwaggerUI(): Promise<any> {
    return { url: 'http://localhost:8000/orderInfo/getAll' };
  }

  @Get('responseObject')
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([' library-specific response object test']);
  }
}
