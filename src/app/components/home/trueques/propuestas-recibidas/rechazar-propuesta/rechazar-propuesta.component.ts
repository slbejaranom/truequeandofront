import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trueque } from 'src/app/domain/trueque';

@Component({
  selector: 'app-rechazar-propuesta',
  templateUrl: './rechazar-propuesta.component.html',
  styleUrls: ['./rechazar-propuesta.component.scss']
})
export class RechazarPropuestaComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<RechazarPropuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public trueque : Trueque) { }

  ngOnInit(): void {

  }

  rechazarTrueque(){
    //ToDo implementar logica y back
  }
}
