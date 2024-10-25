import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('weekdays')
export class WeekDays {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'day_name' })
  dayName: string;
}
