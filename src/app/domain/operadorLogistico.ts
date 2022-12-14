import { Usuario } from "./usuario";

export interface OperadorLogistico extends Usuario{
    nit?: string;
    precioKilogramo?: number;
    precioKilometro?: number;
    precioMetroCubico?: number;
}