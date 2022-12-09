import { Component, Input, OnInit } from '@angular/core';
import { Elemento } from 'src/app/domain/elemento';

@Component({
  selector: 'app-lista-objetos',
  templateUrl: './lista-objetos.component.html',
  styleUrls: ['./lista-objetos.component.scss']
})
export class ListaObjetosComponent implements OnInit {

  @Input() listaElementos : Elemento[] = [
    {
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
    },
    {
      "id": 0,
      "altura": 10,
      "anchura": 10,
      "longitud": 10,
      "categoria": 0,
      "estado": true,
      "nombre": "Pepita de aguacate",
      "peso": 10,
      "valor": 10000,
      "urlImagen": "https://www.cocinayvino.com/wp-content/uploads/2016/09/14403475_l-696x462.jpg"
    },
    {
      "id": 0,
      "altura": 10,
      "anchura": 10,
      "longitud": 10,
      "categoria": 0,
      "estado": true,
      "nombre": "Pepita de mango",
      "peso": 10,
      "valor": 10000,
      "urlImagen": "https://www.cocinayvino.com/wp-content/uploads/2016/09/14403475_l-696x462.jpg"
    },
    {
      "id": 0,
      "altura": 10,
      "anchura": 10,
      "longitud": 10,
      "categoria": 0,
      "estado": true,
      "nombre": "Pepita de sandía",
      "peso": 10,
      "valor": 10000,
      "urlImagen": "https://www.cocinayvino.com/wp-content/uploads/2016/09/14403475_l-696x462.jpg"
    },
    {
      "id": 0,
      "altura": 10,
      "anchura": 10,
      "longitud": 10,
      "categoria": 0,
      "estado": true,
      "nombre": "Pepita de naranja",
      "peso": 10,
      "valor": 10000,
      "urlImagen": "https://www.cocinayvino.com/wp-content/uploads/2016/09/14403475_l-696x462.jpg"
    }
  ];
  numeroElementosParaMostrar : number = 4;
  listaElementosActiva : Elemento[] = [];
  listaNumeroElementos : number[]= [];

  constructor() {
    this.numeroElementosParaMostrar = this.listaElementos.length < 4 ? this.listaElementos.length : 4;
    this.listaNumeroElementos = Array(this.numeroElementosParaMostrar).fill(0).map((x,i) => i);
  }

  ngOnInit(): void {
    this.listaElementosActiva = this.listaElementos.slice(0, this.numeroElementosParaMostrar);
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
