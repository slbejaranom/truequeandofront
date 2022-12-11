import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class PropuestasRecibidasComponent implements OnInit , OnChanges{

  @Input() trueques : Trueque[];

  displayedColumns: string[] = ['id', 'fecha', 'usuario1', 'elemento2', 'elemento1', 'estado'];
  dataSource = new Array<Trueque>;

  ngOnInit(): void {

  }

  constructor(public dialog : MatDialog){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.trueques != null)
      console.log(this.trueques);
      this.dataSource = this.trueques;
  }

  aceptarTrueque(trueque : Trueque){
    this.openDialog("100ms","100ms", trueque, AceptarPropuestaComponent);
  }

  rechazarTrueque(trueque : Trueque){
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
