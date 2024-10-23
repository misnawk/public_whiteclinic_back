import { Injectable } from '@nestjs/common';

import { AdminService } from 'src/admin/admin.service';
import { RefreshTokenService } from 'src/refresh_token/refresh_token.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private refreshTokenService: RefreshTokenService,
    private jwtService: JwtService,
  ) {}

  // 회원가입
  async register(adminID: string, adminPW: string, role: string = 'admin') {
    return this.adminService.createAdmin(adminID, adminPW, role);
  }
}
