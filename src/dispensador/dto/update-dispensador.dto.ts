import { PartialType } from '@nestjs/mapped-types';
import { CreateDispensadorDto } from './create-dispensador.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDispensadorDto extends PartialType(CreateDispensadorDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}