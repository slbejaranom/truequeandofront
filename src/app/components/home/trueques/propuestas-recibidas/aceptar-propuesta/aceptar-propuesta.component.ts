import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trueque } from 'src/app/domain/trueque';

@Component({
  selector: 'app-aceptar-propuesta',
  templateUrl: './aceptar-propuesta.component.html',
  styleUrls: ['./aceptar-propuesta.component.scss']
})
export class AceptarPropuestaComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<AceptarPropuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public trueque : Trueque) { }

  ngOnInit(): void {
  }

  aceptarTrueque(){
    //ToDo implementar lógica y back
  }

}
