import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';
import { RefreshTokenModule } from 'src/refresh_token/refresh_token.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    AdminModule,
    RefreshTokenModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        const publicKey = process.env.PUBLIC_KEY;
        const privateKey = process.env.PRIVATE_KEY;

        return {
          privateKey: privateKey,
          publicKey: publicKey,
          signOptions: {
            algorithm: 'RS256',
            expiresIn: '5m',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
