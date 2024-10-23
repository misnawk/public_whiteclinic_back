import { Module } from '@nestjs/common';
import { RegistrationService } from './service/registration.service';
import { RegistrationController } from './controller/registration.controller';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
