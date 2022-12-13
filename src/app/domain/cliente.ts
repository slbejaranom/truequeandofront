import { Elemento } from "./elemento";
import { Usuario } from "./usuario";

export interface Cliente extends Usuario{
    departamento?:string,
    direccion?:string,
    municipio?:string,
    elementos?:Elemento[]
}