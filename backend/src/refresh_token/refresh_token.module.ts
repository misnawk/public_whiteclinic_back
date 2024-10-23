import { Module } from '@nestjs/common';
import { RefreshTokenService } from './refresh_token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshToken } from './entities/refresh_token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RefreshToken])],
  controllers: [],
  providers: [RefreshTokenService],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule {}
