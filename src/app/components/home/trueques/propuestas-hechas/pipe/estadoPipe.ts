import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'estadoAString'})
export class EstadoAString implements PipeTransform {
  transform(estado: number): string {
    switch(estado){
        case 0: 
            return "Propuesta enviada";
        case 1:
            return "Aceptado";
        case 2:
            return "Entregado";
        case 3:
            return "Rechazado";
        default:
            return "Estado desconocido";
    }
  }
}