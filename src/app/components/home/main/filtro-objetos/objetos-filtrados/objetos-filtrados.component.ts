import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-objetos-filtrados',
  templateUrl: './objetos-filtrados.component.html',
  styleUrls: ['./objetos-filtrados.component.scss']
})
export class ObjetosFiltradosComponent implements OnInit , OnChanges{

  @Input() elementosFiltrados : Elemento[];
  numeroElementosParaMostrar : number = 4;
  listaElementosActiva : Elemento[] = [];
  listaNumeroElementos : number[]= [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void{    
    if(this.elementosFiltrados){
      this.numeroElementosParaMostrar = this.elementosFiltrados.length < 12 ? this.elementosFiltrados.length : 12;
      this.listaNumeroElementos = Array(this.numeroElementosParaMostrar).fill(0).map((x,i) => i);
      this.listaElementosActiva = this.elementosFiltrados.slice(0, this.numeroElementosParaMostrar);
    }    
  }
  
  slide(toRight : boolean){
    this.arrayRotate(this.elementosFiltrados, toRight);
    this.ngOnChanges();
  }
  arrayRotate(arr : Array<any>, reverse : boolean) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }
}
