import { Admin } from 'src/admin/entities/admin.entity';
export declare class RefreshToken {
    id: number;
    token: string;
    createAt: Date;
    expiresAt: Date;
    admin: Admin;
}
