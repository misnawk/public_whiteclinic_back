import { Module } from '@nestjs/common';
import { RegistrationService } from './service/registration.service';
import { RegistrationController } from './controller/registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from 'src/engineer-info/entities/engineer-info.entity';
import { Skill } from './entities/skill.entity';
import { EngineerCommissionRates } from 'src/engineer-info/entities/engineer-commissionRates.entity';
import { EngineerSkill } from './entities/Engineer_skill.entity';
import { CommissionRates } from './entities/commissionRates.entity';
import { SpecialHolidays } from './entities/specialHolidays.entity';
import { WeekDays } from './entities/weekDay.entity';
import { RegularHolidays } from './entities/reaularHolidays.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Engineer,
      Skill,
      EngineerCommissionRates,
      EngineerSkill,
      CommissionRates,
      SpecialHolidays,
      WeekDays,
      RegularHolidays,
    ]),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
