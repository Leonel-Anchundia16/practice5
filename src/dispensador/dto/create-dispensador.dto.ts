import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDispensadorDto {

    @IsString()
    @IsNotEmpty()
    descripcion:string;

}