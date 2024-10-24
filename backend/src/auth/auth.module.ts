import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';
import { RefreshTokenModule } from 'src/refresh_token/refresh_token.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { JwtStrategy } from './jwt.strategy';
import { PRIVATE_KEY_PATH, PUBLIC_KEY_PATH } from 'src/util/URLS';

console.log(process.env.PRIVATE_KEY_PATH);
console.log(process.env.PUBLIC_KEY_PATH);

@Module({
  imports: [
    AdminModule,
    RefreshTokenModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        privateKey: fs.readFileSync(
          path.resolve(configService.get<string>(PRIVATE_KEY_PATH)), // .env 환경변수 가져오기
          'utf8',
        ),
        publicKey: fs.readFileSync(
          path.resolve(configService.get<string>(PUBLIC_KEY_PATH)), // .env 환경변수 가져오기
          'utf8',
        ),
        signOptions: {
          algorithm: 'RS256',
          expiresIn: '5m',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
