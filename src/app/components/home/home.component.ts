import { Component, OnInit } from '@angular/core';

const OPCIONES_CLIENTE =  [
  {
    ruta: "main",
    texto: "Principal"
  },
  {
    ruta: "trueques",
    texto: "Trueques"
  }
];

const OPCIONES_OPERADOR_LOGISTICO = [
  {
    ruta: "olmain",
    texto: "Principal"
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opciones : any;

  constructor() { 
    let token  = localStorage.getItem("accessToken");
    if(token != null){
      let tokenArgs = atob(token).split(":");      
      let rol = tokenArgs[1];
      switch(rol){
        case "0":
          //Implementar opciones administrador
          this.opciones = [];
          break;
        case "1":
          this.opciones = OPCIONES_CLIENTE;
          break;
        case "2":
          this.opciones = OPCIONES_OPERADOR_LOGISTICO;
          break;
        default:
          this.opciones = []
          break;
      }
    }  
  }

  ngOnInit(): void {
  }

}
