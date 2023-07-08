import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';
import { Repository } from 'typeorm';
export declare class DispensadorService {
    private readonly dispensadorRepository;
    private readonly logger;
    constructor(dispensadorRepository: Repository<Dispensador>);
    create(createDispensadorDto: CreateDispensadorDto): Promise<Dispensador>;
    findAll(): Promise<Dispensador[]>;
    findOne(id: string): Promise<Dispensador>;
    remove(id: string): Promise<void>;
    update(id: string, updateDispensadorDto: UpdateDispensadorDto): Promise<Dispensador>;
}
