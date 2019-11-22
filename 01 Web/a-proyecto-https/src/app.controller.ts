import {Controller, Get, Post, Put, Delete, HttpCode, InternalServerErrorException} from '@nestjs/common';
import {AppService} from './app.service';
import {publicDecrypt} from 'crypto';


@Controller('pepito')  // Segmento url -> "/"
export class AppController {
    constructor(private appService: AppService) {
    }// http://localhost:4000/pepito/hola-mundo/ GET

    @Get('hola-mundo')  // -> "Hola mundo"
    getHello(): string {
        return this.appService.getHello();
    }

    // http://localhost:4000/pepito/esPar  POST
    @HttpCode(200)
    @Post('esPar')
    adiosMundo(): string {
        const segundos = this.obtenerSegundos();
        if (segundos % 2 === 0) {
            return 'Adios mundo';
        } else {
            throw new InternalServerErrorException(
                'Es impar'
            );
        }
    }

    private obtenerSegundos(): number {
        return new Date().getSeconds();
    }

}

/*
// Typescript
// var nombre: string = "Adrian";
let apellido: string = 'Eguez'; // Variable MUTABLE
// tslint:disable-next-line:ban-types one-variable-per-declaration
const cedula: String = '1718...'; // V. INMUTABLE

apellido = 'Sarzosa'; // RE ASIGNADO "=" Mutable
// cedula = "18"; // :( INMUTABLE - NO RE ASIGNAR

// PRIMITIVOS
// String, number, boolean

const casado: boolean = false; // boolean
const edad: number = 30; // number
const sueldo: number = 12.12; // number
const hijos = null; // null = vacio
let ojos; // undenifed = no está definido

// TRUTY - FALSY
if (0) {
    console.log('Truty');
} else {
    console.log('Falsy'); // FALSY
}

if (-1) {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}

if (1) {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}

if ('') {   // String vacio
    console.log('Truty');
} else {
    console.log('Falsy'); // Falsy
}

if ('abc') {   // String lleno
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}

if ([]) {
    console.log('Truty'); // TRUTY
} else {
    console.log('Falsy');
}

if ({}) {
    // tslint:disable-next-line:no-console
    console.log('Truty'); // TRUTY
} else {
    // tslint:disable-next-line:no-console
    console.log('Falsy');
}


class Usuario {
    public cedula: string = '156465';
    cedula2 = '4651464'; // public : string

//   constructor(
//       public nombre:string, // Crear una Propiedad
//                           // Llamada nombre y
//                           // Recibir un parámetro
//                           //Y asignarlo a la propiedad
//                           // nombre
//
//   ){}


    private holaMundo(): void {
        console.log('HOla')
    }

    holaMundo2() {
        console.log("Hola")
    }
}


class Usuario2 {
    constructor(
        public nombre: string, // Parametro requerido
        public apellido?: string, // Parametro opcional
    ) {
    }
}

const adrian = new Usuario2(nombre:"Adrian");
const adrian = new Usuario2(nombre:"Vicente", apellido:"Eguez");

class Empleado extends Usuario2 {
    constructor(
        nombre: string,
        public numeroContrato: string,
        apellido ?: string,
    )
    {
        super(nombre, apellido);
    }
}

const empleadoAdrian = new Empleado(nombre:"Adrian", numeroContrato: "1234");

interface Pelota{
  diametro:number;
  color?: string;
}

const balonFutbol: Pelota = {
  diametro:1,
  color: "azul",
  // peso: 12,
};



/*
class Juego implements Pelota{
  diametro:number;
}
*/


/*
interface Entrenador{
  id: number;
  nombre:string;
}


interface Pokemon{
  id: number;
  nombre:string;
  entrenador: Entrenador | number; // Foreign Key
}

const ash: Entrenador:{
  id:1,
  nombre: 'Ash',
};

const pikachu: Pokemon = {
  id:1,
  nombre:'Pikachu',
  entrenador: 1,
};

const suma = pikachu.entrenador as number + pikachu.id;
const suma = <number> pikachu.entrenador + pikachu.id;
*/


