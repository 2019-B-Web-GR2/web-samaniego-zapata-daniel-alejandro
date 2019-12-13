import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity) // Inyectar Dependencias
        private _repositorioUsuario: Repository<UsuarioEntity>
    ) {
    }

    encontrarUno(id: number): Promise<UsuarioEntity | undefined> {
        return this._repositorioUsuario
            .findOne(id);
    }

    borrarUno(id: number): Promise<UsuarioEntity | undefined> {
        return this._repositorioUsuario
            .findOne(id);
    }
}