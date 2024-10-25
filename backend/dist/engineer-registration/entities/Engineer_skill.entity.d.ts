import { Engineer } from 'src/engineer-info/entities/engineer-info.entity';
import { Skill } from './skill.entity';
export declare class EngineerSkill {
    id: number;
    engineerId: number;
    skillId: number;
    engineer: Engineer;
    skill: Skill;
}
