import { Injectable } from '@nestjs/common';
import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { UpdateEngineerInfoDto } from '../dto/update-engineer-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Engineer } from '../entities/engineer-info.entity';
import { EngineerDailyearnings } from '../entities/engineer-dailyearnings.entity';
import { EngineerPayDay } from '../entities/engineer-payDay.entity';
import { EngineerCommissionRates } from '../entities/engineer-commissionRates.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EngineerInfoService {
  constructor(
    @InjectRepository(Engineer)
    private EngineerRepository: Repository<Engineer>,

    @InjectRepository(EngineerDailyearnings)
    private engineerDailyearningsReopsitory: Repository<EngineerDailyearnings>,

    @InjectRepository(EngineerPayDay)
    private EngineerPayDayRepository: Repository<EngineerPayDay>,

    @InjectRepository(EngineerCommissionRates)
    private EngineerCommissionRatesRepository: Repository<EngineerCommissionRates>,
  ) {}

  async engineer(): Promise<Engineer[]> {
    const engineerData = await this.EngineerRepository.find();
    console.log(engineerData);
    return engineerData;
  }

  async enginnerPay(): Promise<EngineerDailyearnings[]> {
    const engineerPay = await this.engineerDailyearningsReopsitory.find();
    console.log(engineerPay);
    return engineerPay;
  }

  async engineerPayDay(): Promise<EngineerPayDay[]> {
    const engineerPayDay = await this.EngineerPayDayRepository.find();
    return engineerPayDay.map(this.dayToName);
  }
  private dayToName(payDay: EngineerPayDay): any {
    const dayNames = [
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
      '일요일',
    ];

    const dayName = dayNames[payDay.weekdays - 1] || '없음';

    return {
      ...payDay,
      weekdayName: dayName,
    };
  }

  async engineerCommissionRates(): Promise<EngineerCommissionRates[]> {
    const engineerCommissionRates =
      await this.EngineerCommissionRatesRepository.find();
    console.log(engineerCommissionRates);

    return engineerCommissionRates.map(this.RatesToFilter);
  }
  private RatesToFilter(rate: EngineerCommissionRates): any {
    const rateArray = [50, 55, 60, 65, 70, 75, 80];
    const resultRate = rateArray[rate.rateId - 1] || '없음';

    return {
      ...rate,
      rateId: resultRate,
    };
  }
}
