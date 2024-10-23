import { Admin } from 'src/admin/entities/admin.entity';
import {
  Column,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // 단일 세션 환경
  token: string;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  expiresAt: Date;

  @OneToOne(() => Admin, (admin) => admin.refreshTokens, {
    onDelete: 'CASCADE',
  })
  admin: Admin;
}
