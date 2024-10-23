import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  readonly adminid: string;

  @IsString()
  @IsNotEmpty()
  readonly adminpw: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
