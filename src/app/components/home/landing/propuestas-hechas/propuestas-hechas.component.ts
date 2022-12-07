import { Component, OnInit } from '@angular/core';
import { Trueque } from 'src/app/domain/trueque';
import { OperadorLogistico } from 'src/app/domain/operadorLogistico';

@Component({
  selector: 'app-propuestas-hechas',
  templateUrl: './propuestas-hechas.component.html',
  styleUrls: ['./propuestas-hechas.component.scss']
})
export class PropuestasHechasComponent implements OnInit{

  trueques : Trueque[] = [{
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  },
  {
    id: 0,
    estado: 0,
    fecha: new Date("01/11/1996"),
    transportador: {
      precioKilogramo: 0,
      precioKilometro: 0,
      precioMetroCubico: 0,
      nit: "Soy un nit"
    },
    elemento1:{
      id: 0,
      nombre: "Bicicleta"
    },
    elemento2:{
      id: 1,
      nombre: "Trompeta"
    },
    usuario1:{
      email: "sebastian@bejarano.com",
      nombre: "Sebastian Bejarano"
    },
    usuario2:{
      email: "katherin@balero.com",
      nombre: "Katherin Balero"
    }
  }];

  displayedColumns: string[] = ['id', 'estado', 'fecha', 'elemento1', 'elemento2', 'transportador'];  
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
