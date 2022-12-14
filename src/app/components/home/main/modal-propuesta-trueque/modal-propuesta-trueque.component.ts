import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Elemento } from 'src/app/domain/elemento';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { firstValueFrom } from "rxjs";
import { Trueque } from 'src/app/domain/trueque';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-propuesta-trueque',
  templateUrl: './modal-propuesta-trueque.component.html',
  styleUrls: ['./modal-propuesta-trueque.component.scss']
})
export class ModalPropuestaTruequeComponent implements OnInit {

  nombreObjetoSeleccionado : string;
  elementosUsuario : Elemento[];
  elementoDado : Elemento;
  email : string;
  constructor(private router : Router, private dialogRef : MatDialogRef<ModalPropuestaTruequeComponent>, private truequeandoService : TruequeandoService, @Inject(MAT_DIALOG_DATA) public elemento : Elemento)
  { 
    let token  = localStorage.getItem("accessToken");
    if(token != null){
      let tokenArgs = atob(token).split(":");
      this.email = tokenArgs[0];   
      this.listarElementosPorUsuario(this.email);         
    }  
  }

  ngOnInit(): void {
  }

  hacerPropuesta(){
    if(this.nombreObjetoSeleccionado != undefined){
      let nuevoTrueque : Trueque = {
        fecha : new Date(),
        elemento1 : this.elementoDado,
        elemento2 : this.elemento,
        usuario1 : {
          email: this.email
        },
        usuario2 : this.elemento.cliente,
        transportador : {
          id: 3
        }
      }
      this.hacerPropuestaTrueque(nuevoTrueque);
    }    
  }

  async listarElementosPorUsuario(email:string){
    try{
      this.elementosUsuario = await firstValueFrom(this.truequeandoService.listarObjetosUsuario(email)) as Elemento[];
    }catch(err){
      console.log(err);
      this.dialogRef.close();
    }
  }
  seleccionarOtroObjeto(selectedValue : any){
    let objetoEncontradoPorId = this.elementosUsuario.filter(elemento => elemento.id == selectedValue).pop();
    if(objetoEncontradoPorId)
      this.elementoDado = objetoEncontradoPorId;
  }

  async hacerPropuestaTrueque(trueque : Trueque){
    try{
      let data = await firstValueFrom(this.truequeandoService.hacerPropuestaTrueque(trueque)) as any;
      if(data.id){
        this.dialogRef.close();
        this.router.navigateByUrl("/home/trueques");
      }else{
        console.log(data.mensaje);
      }
    }catch(err){
      console.log(err);
    }
  }
}
