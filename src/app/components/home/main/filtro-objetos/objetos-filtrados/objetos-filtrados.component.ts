import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-objetos-filtrados',
  templateUrl: './objetos-filtrados.component.html',
  styleUrls: ['./objetos-filtrados.component.scss']
})
export class ObjetosFiltradosComponent implements OnInit , OnChanges{

  @Input() elementosFiltrados : Elemento[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.elementosFiltrados){
    }
  }
}
