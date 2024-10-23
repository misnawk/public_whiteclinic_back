import { ConfigService } from '@nestjs/config';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entities/admin.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly adminService;
    constructor(adminService: AdminService, configService: ConfigService);
    validate(payload: any): Promise<Admin>;
}
export {};
