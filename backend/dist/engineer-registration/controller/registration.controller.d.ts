import { RegistrationService } from '../service/registration.service';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(createRegistrationDto: CreateRegistrationDto): Promise<string>;
}
