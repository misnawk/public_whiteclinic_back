import { Module } from '@nestjs/common';
import { EngineerInfoController } from './controller/engineer-info.controller';
import { EngineerInfoService } from './service/engineer-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from './entities/engineer-info.entity';
import { EngineerDailyearnings } from './entities/engineer-dailyearnings.entity';
import { EngineerPayDay } from './entities/engineer-payDay.entity';
import { EngineerCommissionRates } from './entities/engineer-commissionRates.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Engineer,
      EngineerDailyearnings,
      EngineerPayDay,
      EngineerCommissionRates,
    ]),
  ],
  controllers: [EngineerInfoController],
  providers: [EngineerInfoService],
})
export class EngineerInfoModule {}
