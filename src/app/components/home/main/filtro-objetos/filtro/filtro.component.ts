import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit , OnChanges{

  @Input() elementosSinFiltrar : Elemento[];
  @Output() newFiltradoEvent = new EventEmitter<Elemento[]>();
  precioMaximo:number=0;
  elementosFiltrados : Elemento[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    if(this.elementosSinFiltrar){
      this.filtrar();
    }
  }
  filtrar(){
    if(this.precioMaximo == 0){
      this.newFiltradoEvent.emit(this.elementosSinFiltrar);
    }      
    else{
      this.elementosFiltrados = this.elementosSinFiltrar.filter(elemento => elemento.valor < this.precioMaximo);  
      this.newFiltradoEvent.emit(this.elementosFiltrados);
    }
  }

  setPrecioMaximo(value: number):string{
    this.precioMaximo = value;
    return String(this.precioMaximo);
  }
}
