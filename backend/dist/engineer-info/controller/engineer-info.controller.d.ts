import { EngineerInfoService } from '../service/engineer-info.service';
import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { UpdateEngineerInfoDto } from '../dto/update-engineer-info.dto';
export declare class EngineerInfoController {
    private readonly engineerInfoService;
    constructor(engineerInfoService: EngineerInfoService);
    create(createEngineerInfoDto: CreateEngineerInfoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEngineerInfoDto: UpdateEngineerInfoDto): string;
    remove(id: string): string;
}
