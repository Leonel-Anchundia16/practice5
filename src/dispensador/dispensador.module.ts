import { Module } from '@nestjs/common';
import { DispensadorService } from './dispensador.service';
import { DispensadorController } from './dispensador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispensador } from './entities/dispensador.entity';

@Module({
  controllers: [DispensadorController],
  providers: [DispensadorService],
  imports:[ TypeOrmModule.forFeature([
    Dispensador
  ])]
})
export class DispensadorModule {}
