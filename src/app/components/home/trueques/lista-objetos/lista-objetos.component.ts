import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-lista-objetos',
  templateUrl: './lista-objetos.component.html',
  styleUrls: ['./lista-objetos.component.scss']
})
export class ListaObjetosComponent implements OnInit, OnChanges {

  @Input() listaElementos : Elemento[];
  numeroElementosParaMostrar : number = 4;
  listaElementosActiva : Elemento[] = [];
  listaNumeroElementos : number[]= [];

  constructor(private router : Router) {
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() : void{    
    if(this.listaElementos != undefined){
      this.listaElementos = this.listaElementos.filter(elemento => elemento.estado != false);
      this.numeroElementosParaMostrar = this.listaElementos.length < 4 ? this.listaElementos.length : 4;
      this.listaNumeroElementos = Array(this.numeroElementosParaMostrar).fill(0).map((x,i) => i);
      this.listaElementosActiva = this.listaElementos.slice(0, this.numeroElementosParaMostrar);
    }    
  }
  slide(toRight : boolean){
    this.arrayRotate(this.listaElementos, toRight);
    console.log(this.listaElementos);
    this.ngOnInit();
  }
  arrayRotate(arr : Array<any>, reverse : boolean) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }
}
