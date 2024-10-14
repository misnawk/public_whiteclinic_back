import { Injectable } from '@nestjs/common';
import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { UpdateEngineerInfoDto } from '../dto/update-engineer-info.dto';

@Injectable()
export class EngineerInfoService {
  create(createEngineerInfoDto: CreateEngineerInfoDto) {
    return 'This action adds a new engineerInfo';
  }

  findAll() {
    return `This action returns all engineerInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} engineerInfo`;
  }

  update(id: number, updateEngineerInfoDto: UpdateEngineerInfoDto) {
    return `This action updates a #${id} engineerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} engineerInfo`;
  }
}
