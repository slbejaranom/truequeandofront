import { Component, Input, OnInit } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.scss']
})
export class ObjetoComponent implements OnInit {

  muchoTexto:boolean = false;

  @Input() elemento : Elemento | undefined;

  constructor() {

  }

  ngOnInit(): void {
    if(this.elemento){
      if(this.elemento.nombre.length >= 19){
        this.muchoTexto = true;
      }
    }    
  }

}
