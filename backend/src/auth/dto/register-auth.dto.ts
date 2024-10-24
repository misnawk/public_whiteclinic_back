import { CreateAuthDto } from './create-auth.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDTO extends PartialType(CreateAuthDto) {
  @ApiProperty({ description: 'adminID' })
  @IsString()
  @IsNotEmpty()
  readonly adminID: string;

  @ApiProperty({ description: 'adminPW' })
  @IsString()
  @IsNotEmpty()
  readonly adminPW: string;

  @ApiProperty({ description: 'role' })
  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
