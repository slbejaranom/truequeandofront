import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Categoria } from 'src/app/domain/categoria';
import { Elemento } from 'src/app/domain/elemento';
import { TruequeandoService } from 'src/app/services/truequeando.service';

@Component({
  selector: 'app-filtro-objetos',
  templateUrl: './filtro-objetos.component.html',
  styleUrls: ['./filtro-objetos.component.scss']
})
export class FiltroObjetosComponent implements OnInit {

  elementos : Elemento[];
  elementosFiltrados : Elemento[];
  categorias : Categoria[];

  constructor(private router : Router, private dialog : MatDialog, private truequeandoService : TruequeandoService) {
    let token  = localStorage.getItem("accessToken");
    if(token != null){
      let tokenArgs = atob(token).split(":");
      let email = tokenArgs[0];   
      this.listarObjetosQueNoSonDelUsuario(email);         
    }  
   }

  ngOnInit(): void {
  }

  async listarObjetosQueNoSonDelUsuario(email : string){
    try{
      this.elementos = await firstValueFrom(this.truequeandoService.listarObjetosOtrosUsuarios(email)) as Elemento[];
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/");
    }
  }
  actualizarElementos(event : Elemento[]){
    this.elementosFiltrados = event;
  }  
}
