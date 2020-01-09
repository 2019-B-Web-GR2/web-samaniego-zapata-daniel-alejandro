import {IsNotEmpty, IsEmpty, IsNumberString, IsString, Max, Min, MinLength, MaxLength, IsNumber} from 'class-validator';

export class UsuarioUpdateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;

    @IsEmpty()
    cedula: string;
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    id: number;
}
