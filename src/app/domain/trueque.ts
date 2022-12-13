import { Elemento } from "./elemento";
import { OperadorLogistico } from "./operadorLogistico";
import { Usuario } from "./usuario";

export interface Trueque{
    id?: number;
    estado?: number;
    fecha: Date;
    elemento1: Elemento,
    elemento2: Elemento,
    usuario1: Usuario,
    usuario2: Usuario,
    transportador: OperadorLogistico;
}