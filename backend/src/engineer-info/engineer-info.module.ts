import { Module } from '@nestjs/common';
import { EngineerInfoController } from './controller/engineer-info.controller';
import { EngineerInfoService } from './service/engineer-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Engineer } from './entities/engineer-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Engineer])],
  controllers: [EngineerInfoController],
  providers: [EngineerInfoService],
})
export class EngineerInfoModule {}
