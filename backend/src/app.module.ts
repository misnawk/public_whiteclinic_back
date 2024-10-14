import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { OrderInfoModule } from './order-info/order-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< Updated upstream
import { EngineerInfoModule } from './engineer-info/engineer-info.module';

=======
import { TestModule } from './test/test.module';
>>>>>>> Stashed changes

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-cold-band-a71ed1zj-pooler.ap-southeast-2.aws.neon.tech',
      url: 'postgres://default:hNOtdfu8sWy3@ep-cold-band-a71ed1zj-pooler.ap-southeast-2.aws.neon.tech:5432/verceldb?sslmode=require',
      username: 'default',
      password: 'hNOtdfu8sWy3',
      database: 'verceldb',
      entities: [],
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    OrderInfoModule,
<<<<<<< Updated upstream
    EngineerInfoModule,
=======
    TestModule,
>>>>>>> Stashed changes
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
