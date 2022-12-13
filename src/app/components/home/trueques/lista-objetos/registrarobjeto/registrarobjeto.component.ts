import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/domain/categoria';
import { Elemento } from 'src/app/domain/elemento';
import { Router } from '@angular/router';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registrarobjeto',
  templateUrl: './registrarobjeto.component.html',
  styleUrls: ['./registrarobjeto.component.scss']
})
export class RegistrarobjetoComponent implements OnInit {

  categorias : Categoria[];

  uploadedImage: File | null;
  imageTemp : string |ArrayBuffer| null;

  constructor(public dialogRef : MatDialogRef<RegistrarobjetoComponent>, private router : Router, private truequeandoService : TruequeandoService) { 
    this.listarCategorias();
    let token  = localStorage.getItem("accessToken");    
    if(token != null){
      let tokenArgs = atob(token).split(":");
      let email = tokenArgs[0];      
    }
  }

  onImageUpload(event : Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.uploadedImage = element.files ? element.files[0] : null;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.uploadedImage?this.uploadedImage:new Blob());
    fileReader.onload = () => {      
      this.imageTemp = fileReader.result;
    }
  }

  ngOnInit(): void {
  }
  async onsubmit(registrarObjetoForm : NgForm){
    if(!registrarObjetoForm.valid){
      return;
    }
    let token  = localStorage.getItem("accessToken"); 
    let email : string = "";   
    if(token != null){
      let tokenArgs = atob(token).split(":");
      email = tokenArgs[0];      
    }
    let nuevoObjeto : Elemento = {      
      nombre: registrarObjetoForm.controls["nombre"].value,
      altura: registrarObjetoForm.controls["altura"].value,
      anchura: registrarObjetoForm.controls["anchura"].value,
      longitud: registrarObjetoForm.controls["longitud"].value,
      categoria: {
        id: 1,
        descripcion: ""
      },
      peso: registrarObjetoForm.controls["peso"].value,      
      valor: registrarObjetoForm.controls["valor"].value,
      imagen: this.imageTemp,
      cliente:{
        email : email
      }
    };
    try{
      let elementoRegistrado : Elemento = await firstValueFrom(this.truequeandoService.registrarObjeto(nuevoObjeto));
      if(elementoRegistrado.id){        
        window.location.reload();
      }
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/home/main");
    }
  }

  async listarCategorias(){
    try{
      this.categorias = await firstValueFrom(this.truequeandoService.listarCategorias()) as Categoria[];      
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/home/main");
    }
  }
}
