import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
  imports: [
      UsuarioModule,
      TypeOrmModule.forRoot(
          {
            type: 'mysql',
            host: '172.31.108.148',
            port: 32771,
            username: 'LazaMH',
            password: '1234',
            database: 'Prueba',
            //dropSchema: true,
            entities: [
                UsuarioEntity,
            ],
            synchronize: true,   // Crear -> true, Conectar -> False
          },
      ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(
        private _usuarioService: UsuarioService,
    ){
    }
}
