import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EngineerInfoService } from '../service/engineer-info.service';
import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { UpdateEngineerInfoDto } from '../dto/update-engineer-info.dto';

@Controller('engineer-info')
export class EngineerInfoController {
  constructor(private readonly engineerInfoService: EngineerInfoService) {}

  @Post()
  create(@Body() createEngineerInfoDto: CreateEngineerInfoDto) {
    return this.engineerInfoService.create(createEngineerInfoDto);
  }

  @Get()
  findAll() {
    return this.engineerInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.engineerInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEngineerInfoDto: UpdateEngineerInfoDto,
  ) {
    return this.engineerInfoService.update(+id, updateEngineerInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.engineerInfoService.remove(+id);
  }
}
