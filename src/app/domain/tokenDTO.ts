import { Usuario } from "./usuario";

export interface TokenDTO{
    id: number;
    valorToken: string;
    activo: boolean;
    tiempoExpiracion: number,
    timestampGeneracion: number,
    usuario : Usuario;
}