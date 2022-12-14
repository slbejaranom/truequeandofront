import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trueque } from 'src/app/domain/trueque';
import { firstValueFrom } from 'rxjs';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechazar-propuesta',
  templateUrl: './rechazar-propuesta.component.html',
  styleUrls: ['./rechazar-propuesta.component.scss']
})
export class RechazarPropuestaComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<RechazarPropuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public trueque : Trueque,
    private truequeandoService : TruequeandoService,
    private router : Router) { }

  ngOnInit(): void {

  }

  async rechazarTrueque(){
    try{
      console.log(this.trueque);   
      let trueque = await firstValueFrom(this.truequeandoService.rechazarTrueque(this.trueque));         
      if(trueque.estado == 3){
        this.dialogRef.close();        
        window.location.reload();
      }
    }catch(err){      
      this.dialogRef.close();
      this.router.navigateByUrl("/home/main");
    }
  }
}
