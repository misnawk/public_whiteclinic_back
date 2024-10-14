import { CreateEngineerInfoDto } from '../dto/create-engineer-info.dto';
import { UpdateEngineerInfoDto } from '../dto/update-engineer-info.dto';
export declare class EngineerInfoService {
    create(createEngineerInfoDto: CreateEngineerInfoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEngineerInfoDto: UpdateEngineerInfoDto): string;
    remove(id: number): string;
}
