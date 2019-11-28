import {Controller, Get, Headers,HttpCode, InternalServerErrorException, Post, Query, Param, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('Pepito') // segmento url -> "/"
export class AppController {
    constructor(private readonly appService: AppService) {

    }// http://localhost:4000/Pepito/ GET

    @Get('Hola-Mundo') // -> url "Hola-Mundo"
    getHello(): string {
        return this.appService.getHello();
    }
    // http://localhost:4000/Pepito/ POST
    @HttpCode(200)
    @Post('esPar')
    adiosMundo(): string{
        const segundos = this.obtenerSegundos();
        if(segundos % 2===0){
            return 'Adios Mundo';
        }else{
            throw new  InternalServerErrorException(
                'Es impar',
            );
        }

    }

    private obtenerSegundos(): number{
        return new Date ().getSeconds()

    }

    // @ts-ignore
    @Get ('obtener-cabeceras')
    obtenerCabeceras(
        @Headers()cabeceras,
        @Headers('numerouno') numeroUno:string
    ){
        console.log(cabeceras);
        return 'Las cabeceras son: ${numeroUno}';
    }

    @Get ('incripcion-curso/:idCurso/:cedula')// /:nombreParametro
    public incripcionesCurso(
        @Param() parametrosDeRuta: ObjetoInscripcion,
        @Param( 'idCurso') idCurso:string,
        @Param('cedula') cedula:string,
    ): string {
        console.log(parametrosDeRuta);
        return 'Te inscribiste al Curso ${idCurso} ${cedula}';
    }


    @Post('almorzar')
    @HttpCode(200)
    public almorzar(
        @Body() parametrosDeCuerpo,
        @Body('id') id:number,//objeto :D Arreglo D:
    ): string {
        // tslint:disable-next-line:no-console
        console.log(parametrosDeCuerpo);
        return 'Te inscribiste al curso ${parametrosDeCuerpo}';
    }


}

interface ObjetoInscripcion {
    idCurso?: string;
    cedula: string;
}




/*//Interfaz
interface Pelota{
  diametro: number;
  color?: string;
}
const balonFutbol:  Pelota ={
  diametro: 1,
}
interface Entrenador {
  id: number;
  nombre: string
}
interface Pokemon {
  id: number;
  nombre: string;
  entrenador: Entrenador | number ; // Foreign Key
}
const ash: Entrenador = {
  id: 1,
  nombre:'Ash',
};
const pikachu: Pokemon = {
  id: 1,
  nombre: 'Pikachu',
  entrenador: 1,
};
const suma = pikachu.entrenador as number + pikachu.id;
const suma2 = <number> pikachu.entrenador + pikachu.id;
/*class Juego implements  Pelota{
  diametro: number;
}*/


/*
//Typescript
// var nombre: string = "Nika"; Nunca se utiliza
let apellido:string = "Olmedo"; // Mutable
const cedula:string = "1720572773"; // Inmutable
apellido = "Velez"; // REASIGNAR "=" Mutable
//cedula = "18"; // :( INMUTABLE -NO REASIGNAR
// Variables Primitivas
const casado:boolean = false; //boolean
const edad : number = 30; // number
const hijos = null; //null
let ojos; // undefined
// Trusty - Falsy
if (0){ // === Compara el tipo de dato
  console.log('Truty');
}else{
  console.log('Falsy'); //Falsy cero es falso
}
if (1){
  console.log('Truty'); // Truty
}else{
  console.log('Falsy');
}
if (-1){
  console.log('Truty'); // Truty
}else{
  console.log('Falsy');
}
if (""){
  console.log('Truty');
}else{
  console.log('Falsy');// Falsy
}
if ([]){
  console.log('Truty');// Truty
}else{
  console.log('Falsy');
}
if ([1,2,3]){
  console.log('Truty');// Truty
}else{
  console.log('Falsy');
}
if ({}){
  console.log('Truty');// Truty
}else{
  console.log('Falsy');
}
/*class Usuario{
  public cedula:string ="1720572773";
  cedula2 = "1712435039"; // public : string
  constructor(
    public  nombre:string // Crea una Propiedad
                          // Llamada nombre y
                          // REcibir un parametro
                          // Y asignar a la propiedad nombre
  ){}
  private holaMundo(): void {
    console.log("Hola")
  }
}*/

/*class Usuario2 {
  constructor(
      public nombre: string, // parametro requerido
      public apellido?: string, // parametro opcional
  ){}
}
const Nika = new Usuario2("Nika","Olmedo");
const Adrian = new Usuario2("Adrian");
class Empleado extends Usuario2{
  constructor(
      nombre:string,
      public numeroContrato:string,
      apellido?:string,
  ){
    super(nombre,apellido);
  }
}
const empleadaNika = new Empleado("Nika",
    "6591");
 */