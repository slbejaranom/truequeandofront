import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Elemento } from 'src/app/domain/elemento';
import { ModalPropuestaTruequeComponent } from '../../modal-propuesta-trueque/modal-propuesta-trueque.component';

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
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  ngOnChanges() : void{    
    if(this.elementosFiltrados){      
      this.elementosFiltrados = this.elementosFiltrados.filter(elemento => elemento.estado != false);      
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
  hacerPropuestaTrueque(elemento:Elemento){
    this.openDialog(
      "100ms",
      "100ms",
      elemento,
      ModalPropuestaTruequeComponent)
  }
  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, elemento : Elemento, component : ComponentType<any>): void {
    this.dialog.open(component, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: elemento,
      width:"50%"
    });
  }
}
