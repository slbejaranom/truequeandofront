import { Component, Input, OnInit } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.scss']
})
export class ObjetoComponent implements OnInit {

  @Input() elemento : Elemento = {
    "id": 0,
    "altura": 10,
    "anchura": 10,
    "longitud": 10,
    "categoria": 0,
    "estado": true,
    "nombre": "Pepita de ahuyama",
    "peso": 10,
    "valor": 10000,
    "urlImagen": "https://www.cocinayvino.com/wp-content/uploads/2016/09/14403475_l-696x462.jpg"
  };

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
