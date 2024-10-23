import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { RegistrationService } from '../service/registration.service';
import { CreateRegistrationDto } from '../dto/create-registration.dto';


@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('engineer')
  async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }
}
