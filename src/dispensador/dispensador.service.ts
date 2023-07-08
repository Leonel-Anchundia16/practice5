import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto  } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DispensadorService {
  private readonly logger = new Logger('DispensadorService');

  constructor( 
    @InjectRepository(Dispensador) 
    private readonly dispensadorRepository: Repository<Dispensador>,
  ){}

    async create(createDispensadorDto: CreateDispensadorDto) {
        try {
          const dispensador =  this.dispensadorRepository.create(createDispensadorDto);
          await this.dispensadorRepository.save(dispensador);
          return dispensador;
        } catch (error) {
          console.log(error)
          if (error.code==='23505')
            throw new BadRequestException(error.detail)
          this.logger.error(error);
          throw new InternalServerErrorException('Error no esperado')
        }
        
    }

  findAll() {
    return this.dispensadorRepository.find({});
  }

  async findOne(id: string) {
    const dispensador= await  this.dispensadorRepository.findOneBy ({ id });
    if (!dispensador)
      throw new NotFoundException(`Dispensador ${id} no encontrado`);
    return dispensador;

  }

  async remove(id: string) {
    const dispensador = await this.findOne(id);
    await this.dispensadorRepository.remove(dispensador);

  }


  async update(id: string, updateDispensadorDto: UpdateDispensadorDto) {
    const dispensador = await this.dispensadorRepository.preload({
      id: id,
      ...updateDispensadorDto
    });
    if (!dispensador) throw new NotFoundException(`Dispensador ${id} no encontrado`)

    try {
      await  this.dispensadorRepository.save(dispensador)
      return dispensador;
      
    } catch (error) {
      console.log(error)
    }

  }


}