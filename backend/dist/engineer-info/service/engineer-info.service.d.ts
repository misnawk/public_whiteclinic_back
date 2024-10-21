import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { Engineer } from '../entities/engineer-info.entity';
import { EngineerDailyearnings } from '../entities/engineer-dailyearnings.entity';
import { EngineerPayDay } from '../entities/engineer-payDay.entity';
import { Repository } from 'typeorm';
export declare class EngineerInfoService {
    private EngineerRepository;
    private engineerDailyearningsReopsitory;
    private EngineerPayDayRepository;
    constructor(EngineerRepository: Repository<Engineer>, engineerDailyearningsReopsitory: Repository<EngineerDailyearnings>, EngineerPayDayRepository: Repository<EngineerPayDay>);
    create(createEngineerInfoDto: CreateEngineerInfoDto): string;
    engineer(): Promise<Engineer[]>;
    enginnerPay(): Promise<EngineerDailyearnings[]>;
    engineerPayDay(): Promise<EngineerPayDay[]>;
    private dayToName;
}
