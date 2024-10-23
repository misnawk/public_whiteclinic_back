import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';

@Injectable()
export class RegistrationService {
  create(createRegistrationDto: CreateRegistrationDto) {
    console.log(createRegistrationDto);

    return '성공적으로 데이터 받음';
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
