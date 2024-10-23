import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { OrderInfoModule } from './order-info/order-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerInfoModule } from './engineer-info/engineer-info.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
<<<<<<< Updated upstream
import { RegistrationModule } from './engineer-registration/registration.module';
=======
import { RefreshTokenModule } from './refresh_token/refresh_token.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
>>>>>>> Stashed changes

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 환경 변수를 전역으로 사용
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/api-docs',
    }),
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
    EngineerInfoModule,
<<<<<<< Updated upstream
    RegistrationModule,
=======
    RefreshTokenModule,
    AdminModule,
    AuthModule,
>>>>>>> Stashed changes
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
