import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engineer_dailyearnings')
export class EngineerDailyearnings {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'engineer_id' })
  engineerId: number; // 기사일련번호

  @Column({ name: 'date', type: 'date' })
  date: string;

  @Column({ name: 'daily_amount' })
  daily_amount: number;
}
