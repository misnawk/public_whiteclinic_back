import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order' })
export class OrderData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  orderDate: string;

  @Column()
  customerName: string;

  @Column()
  customerPhoneNum: string;

  @Column()
  customerAddr: string;

  @Column()
  customerComments: string;

  @Column()
  customerPayment: string;

  @Column()
  customerReciept: string;

  @Column()
  checkReciept: boolean;
}
