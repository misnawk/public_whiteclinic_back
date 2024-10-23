import { Admin } from 'src/admin/entities/admin.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // 단일 세션 환경
  token: string;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  expiresAt: Date;

  @ManyToOne(() => Admin, (admin) => admin.refreshTokens, {
    onDelete: 'CASCADE',
  })
  admin: Admin;
}
