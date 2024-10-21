import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engineer_payday')
export class EngineerPayDay {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'engineer_id' })
  engineerId: number;

  @Column({ name: 'weekdays' })
  weekdays: number;

  @Column({ name: 'is_pay' })
  isPay: boolean;
}
