import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class SubmitOrderDto {
  @IsString()
  @ApiProperty({ description: '주문 일자' })
  readonly orderDate: string;
  @IsString()
  @ApiProperty({ description: '고객 성함' })
  readonly customerName: string;
  @IsString()
  @ApiProperty({ description: '고객 연락처' })
  readonly customerPhoneNum: string;
  @IsString()
  @ApiProperty({ description: '고객 주소지' })
  readonly customerAddr: string;
  @IsString()
  @ApiProperty({ description: '고객 특이사항' })
  readonly customerComments: string;
  @IsString()
  @ApiProperty({ description: '결제 방식' })
  readonly customerPayment: string;
  @IsString()
  @ApiProperty({ description: '영수증 종류' })
  readonly customerReciept: string;
  @IsBoolean()
  @ApiProperty({ description: '영수증 발행여부' })
  readonly checkReciept: boolean;
}
