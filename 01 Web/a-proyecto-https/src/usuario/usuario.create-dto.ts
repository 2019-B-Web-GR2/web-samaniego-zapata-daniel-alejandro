import {IsNotEmpty, IsNumberString, IsString, Max, Min, MinLength, MaxLength} from "class-validator";
import {kMaxLength} from "buffer";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @Min(3)
    @Max(80)
    nombre: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    cedula: string;
}
