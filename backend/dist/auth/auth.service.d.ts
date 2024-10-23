import { AdminService } from 'src/admin/admin.service';
import { RefreshTokenService } from 'src/refresh_token/refresh_token.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshResponseDTO } from 'src/refresh_token/dto/refresh_response.dto';
export declare class AuthService {
    private adminService;
    private refreshTokenService;
    private jwtService;
    constructor(adminService: AdminService, refreshTokenService: RefreshTokenService, jwtService: JwtService);
    signIn(adminID: string, pass: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    private generateRefreshToken;
    refreshAccessToken(refreshToken: string): Promise<RefreshResponseDTO>;
    logout(refreshToken: string): Promise<void>;
    logoutAll(id: number): Promise<void>;
    register(adminID: string, adminPW: string, role?: string): Promise<import("../admin/entities/admin.entity").Admin>;
}
