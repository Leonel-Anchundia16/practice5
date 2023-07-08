import { DispensadorService } from './dispensador.service';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';
export declare class DispensadorController {
    private readonly dispensadorService;
    constructor(dispensadorService: DispensadorService);
    create(createDispensadordio: CreateDispensadorDto): Promise<Dispensador>;
    findAll(): Promise<Dispensador[]>;
    findOne(id: string): Promise<Dispensador>;
    update(id: string, updateDispensadorDto: UpdateDispensadorDto): Promise<Dispensador>;
    remove(id: string): Promise<void>;
}
