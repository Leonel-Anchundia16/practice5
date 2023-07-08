import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { DispensadorService } from './dispensador.service';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';

@Controller('dispensador')
export class DispensadorController {
  constructor(private readonly dispensadorService: DispensadorService) {}

  @Post()
  create(@Body() createDispensadordio: CreateDispensadorDto) {
    return this.dispensadorService.create(createDispensadordio);
  }

  @Get()
  findAll()  {
    return this.dispensadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.dispensadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string,  @Body() updateDispensadorDto: UpdateDispensadorDto) {
    return this.dispensadorService.update(id, updateDispensadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.dispensadorService.remove(id);
  }
}