import { Categoria } from "./categoria";
import { Cliente } from "./cliente";

export interface Elemento{
    id?: number;
    altura: number;
    anchura: number;
    longitud: number;
    categoria: Categoria;
    estado?: boolean;
    nombre: string;
    peso: number;
    valor: number;
    cliente: Cliente;
    imagen: string | ArrayBuffer | null;
}