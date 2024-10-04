import { IsBoolean, IsString } from 'class-validator';

export class SubmitOrderDto {
  @IsString()
  readonly orderDate: string;
  @IsString()
  readonly customerName: string;
  @IsString()
  readonly customerPhoneNum: string;
  @IsString()
  readonly customerAddr: string;
  @IsString()
  readonly customerComments: string;
  @IsString()
  readonly customerPayment: string;
  @IsString()
  readonly customerReciept: string;
  @IsBoolean()
  readonly checkReciept: boolean;
}
