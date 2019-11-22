import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {publicDecrypt} from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Typescript
// var nombre: string = "Adrian";
let apellido: string = 'Eguez', ; // Variable MUTABLE
// tslint:disable-next-line:ban-types one-variable-per-declaration
const cedula: String = '1718...', // V. INMUTABLE

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


class Usuario{
  public cedula: string = '156465';
  cedula2 = '4651464'; // public : string

  private holaMundo():void{
    console.log("HOla")
  }
  holaMundo2(){
    console.log("Hola")
  }
}

