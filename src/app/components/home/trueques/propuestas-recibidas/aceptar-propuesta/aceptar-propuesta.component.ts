import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trueque } from 'src/app/domain/trueque';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { firstValueFrom } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptar-propuesta',
  templateUrl: './aceptar-propuesta.component.html',
  styleUrls: ['./aceptar-propuesta.component.scss']
})
export class AceptarPropuestaComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<AceptarPropuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public trueque : Trueque,
    private truequeandoService : TruequeandoService,
    private router : Router) { }

  ngOnInit(): void {
  }

  async aceptarTrueque(){
    try{
      let trueque = await firstValueFrom(this.truequeandoService.aceptarTrueque(this.trueque));      
      if(trueque.estado == 1){
        this.dialogRef.close();
        window.location.reload();
      }
    }catch(err){      
      this.dialogRef.close();
      this.router.navigateByUrl("/home/main");
    }
  }
}
