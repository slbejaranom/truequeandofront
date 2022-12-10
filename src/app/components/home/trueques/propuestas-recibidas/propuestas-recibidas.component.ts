import { Component, OnInit } from '@angular/core';
import { Trueque } from 'src/app/domain/trueque';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RechazarPropuestaComponent } from './rechazar-propuesta/rechazar-propuesta.component';
import { AceptarPropuestaComponent } from './aceptar-propuesta/aceptar-propuesta.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-propuestas-recibidas',
  templateUrl: './propuestas-recibidas.component.html',
  styleUrls: ['./propuestas-recibidas.component.scss']
})
export class PropuestasRecibidasComponent implements OnInit {

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

  displayedColumns: string[] = ['id', 'fecha', 'usuario1', 'elemento2', 'elemento1', 'estado'];
  dataSource = this.trueques;

  ngOnInit(): void {

  }

  constructor(public dialog : MatDialog){

  }

  aceptarTrueque(trueque : Trueque){
    //ToDo colocar modal de aceptar trueque
    console.log("Estoy aceptando trueque:"+ trueque.id);
    this.openDialog("100ms","100ms", trueque, AceptarPropuestaComponent);
  }

  rechazarTrueque(trueque : Trueque){
    //ToDo colocar modal de rechazar trueque
    console.log("Estoy rechazando trueque:"+ trueque.id);
    this.openDialog("100ms","100ms", trueque, RechazarPropuestaComponent);

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, trueque : Trueque, component : ComponentType<any>): void {
    this.dialog.open(component, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: trueque
    });
  }
}
