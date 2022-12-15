import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Elemento } from 'src/app/domain/elemento';
import { Trueque } from 'src/app/domain/trueque';
import { TruequeandoService } from 'src/app/services/truequeando.service';

@Component({
  selector: 'app-trueques',
  templateUrl: './trueques.component.html',
  styleUrls: ['./trueques.component.scss']
})
export class TruequesComponent implements OnInit {

  listaElementosUsuario : Elemento[];
  listaTruequesHechosPorUsuario : Trueque[];
  listaTruequesHechosAUsuario : Trueque[];

  constructor(private truequeandoService : TruequeandoService, private router : Router) {
    let token  = localStorage.getItem("accessToken");
    if(token != null){
      let tokenArgs = atob(token).split(":");
      let email = tokenArgs[0];
      this.listarElementosUsuario(email);
      this.listarTruequesHechosPorUsuario(email);
      this.listarTruequesHechosAUsuario(email);
    }    
  }

  ngOnInit(): void{
    
  }

  async listarElementosUsuario(email: string){
    try{
      this.listaElementosUsuario = await firstValueFrom(this.truequeandoService.listarObjetosUsuario(email)) as Elemento[];
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/home/main");
    }
  }  

  async listarTruequesHechosPorUsuario(email :string){
    try{
      this.listaTruequesHechosPorUsuario = await firstValueFrom(this.truequeandoService.listarTruequesHechosPorUsuario(email)) as Trueque[];
      for(let trueque of this.listaTruequesHechosPorUsuario){
        trueque.precio = await this.truequeandoService.calcularPrecio(trueque);
      }
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/home/main");
    }
  }

  

  async listarTruequesHechosAUsuario(email :string){
    try{
      this.listaTruequesHechosAUsuario = await firstValueFrom(this.truequeandoService.listarTruequesHechosAUsuario(email)) as Trueque[];
      for(let trueque of this.listaTruequesHechosAUsuario){
        trueque.precio = await this.truequeandoService.calcularPrecio(trueque);
      }
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/home/main"); 
    }  
  }
}
