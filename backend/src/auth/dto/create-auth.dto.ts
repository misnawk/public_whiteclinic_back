import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ description: 'adminID' })
  @IsString()
  @IsNotEmpty()
  readonly adminID: string;

  @ApiProperty({ description: 'adminPW' })
  @IsString()
  @IsNotEmpty()
  readonly adminPW: string;
}
