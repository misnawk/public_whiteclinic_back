import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { RegisterAuthDTO } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 회원가입
  @Post('register')
  @ApiBody({ type: RegisterAuthDTO })
  @ApiResponse({ status: 201, description: '회원가입 성공' })
  async register(@Body() registerDto: RegisterAuthDTO) {
    const { adminID, adminPW, role } = registerDto;
    const admin = await this.authService.register(adminID, adminPW, role);
    return { message: '회원가입 성공', id: admin.id };
  }
}
