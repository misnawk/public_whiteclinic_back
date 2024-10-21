import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engineer_commissionrates')
export class EngineerCommissionRates {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'engineer_id' })
  EngineerId: number;

  @Column({ name: 'rate_id' })
  rateId: number;
}
