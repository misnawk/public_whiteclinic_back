import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
export declare class RegistrationService {
    create(createRegistrationDto: CreateRegistrationDto): string;
    update(id: number, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: number): string;
}
