import { EngineerInfoService } from '../service/engineer-info.service';
import { Engineer } from '../entities/engineer-info.entity';
export declare class EngineerInfoController {
    private readonly engineerInfoService;
    constructor(engineerInfoService: EngineerInfoService);
    findAll(): Promise<{
        engineer: Engineer[];
        engineerPay: import("../entities/engineer-dailyearnings.entity").EngineerDailyearnings[];
        engineerPayDay: import("../entities/engineer-payDay.entity").EngineerPayDay[];
        EngineerCommissionRates: import("../entities/engineer-commissionRates.entity").EngineerCommissionRates[];
    }>;
}
