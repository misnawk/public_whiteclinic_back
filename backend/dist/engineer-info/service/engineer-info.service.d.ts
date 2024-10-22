import { Engineer } from '../entities/engineer-info.entity';
import { EngineerDailyearnings } from '../entities/engineer-dailyearnings.entity';
import { EngineerPayDay } from '../entities/engineer-payDay.entity';
import { EngineerCommissionRates } from '../entities/engineer-commissionRates.entity';
import { Repository } from 'typeorm';
export declare class EngineerInfoService {
    private EngineerRepository;
    private engineerDailyearningsReopsitory;
    private EngineerPayDayRepository;
    private EngineerCommissionRatesRepository;
    constructor(EngineerRepository: Repository<Engineer>, engineerDailyearningsReopsitory: Repository<EngineerDailyearnings>, EngineerPayDayRepository: Repository<EngineerPayDay>, EngineerCommissionRatesRepository: Repository<EngineerCommissionRates>);
    engineer(): Promise<Engineer[]>;
    enginnerPay(): Promise<EngineerDailyearnings[]>;
    engineerPayDay(): Promise<EngineerPayDay[]>;
    private dayToName;
    engineerCommissionRates(): Promise<EngineerCommissionRates[]>;
    private RatesToFilter;
}
