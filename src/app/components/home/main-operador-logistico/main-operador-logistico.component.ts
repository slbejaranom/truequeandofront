import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trueque } from 'src/app/domain/trueque';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-main-operador-logistico',
  templateUrl: './main-operador-logistico.component.html',
  styleUrls: ['./main-operador-logistico.component.scss']
})
export class MainOperadorLogisticoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fecha', 'usuario1', 'elemento2', 'elemento1', 'estado'];
  dataSource = new Array<Trueque>;

  constructor(private router : Router, private truequeandoService : TruequeandoService) { }

  async ngOnInit() {
    try{
      this.dataSource = await firstValueFrom(this.truequeandoService.listarTruequesAceptados()) as Trueque[];
    }    
    catch(err){
      console.log(err);
      localStorage.clear();
      this.router.navigateByUrl("/");
    }
  }

  entregarTrueque(trueque : Trueque) {

  }
}
