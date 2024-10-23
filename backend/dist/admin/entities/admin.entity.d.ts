import { RefreshToken } from 'src/refresh_token/entities/refresh_token.entity';
export declare class Admin {
    id: number;
    adminid: string;
    adminpw: string;
    role: string;
    tokenVersion: number;
    refreshTokens: RefreshToken[];
}
